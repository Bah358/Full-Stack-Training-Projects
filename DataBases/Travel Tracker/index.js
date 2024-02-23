import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;



const  db = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database:`world`,
    password:`Alskdjfhg1234@`,
    port:5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted(){
  const result = await db.query(`SELECT country_code FROM visited_countries `);
  //console.log(result.rows)
  let countries=[];
  result.rows.forEach((item)=>{
      countries.push(item.country_code)});
      return countries ;
}

app.get("/", async (req, res) => {
  //Write your code here.
  const result= await checkVisisted();
  console.log(result)
  res.render( "index.ejs" ,{countries: result , total: result.length}) ;
  });

app.post("/add",  async (req,res) => {
  const input = req.body["country"];

  try{
    const results = await db.query(`SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%' ;`, [input.toLowerCase()]);
    //console.log(results.rows[0])
    const data = results.rows[0];
    const country_code= data.country_code;
    try{
      await db.query(`INSERT INTO visited_countries (country_code) VALUES ($1)`,[country_code]);
      res.redirect("/");
    } catch (err) {
        console.log(err);
        const countries= await checkVisisted();
        res.render("index.ejs", {countries:  countries ,total : countries.length, error: "Country has been added, Try Again",});
    }
  } catch(err) {
      console.log(err);
      const countries= await checkVisisted();
      res.render("index.ejs" , {countries:  countries ,total : countries.length, error: "Country does not exist, Try Again" })
  }
    });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
