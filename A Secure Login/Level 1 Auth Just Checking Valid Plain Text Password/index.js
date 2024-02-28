import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();

const db= new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
})
db.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try{
    const checkexist = await db.query(`SELECT * FROM users WHERE email='${email}'`);
    
    if(checkexist.rows.length>0){
      res.send("User already exist, Try logging in")
  } else{
      const result = await db.query(`INSERT INTO users (email, password) VALUES($1,$2)`,[email, password]);
      console.log(result);  
      res.render("secrets.ejs");
  }} catch(err) 
  {console.log(err)}
  
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkvalid = await db.query("Select * FROM users WHERE email=$1",[email]);
    if(checkvalid.rows.length >0){
      const storedPassword = checkvalid.rows[0].password;
      if (storedPassword === password){
      res.render("secrets.ejs");
    }else{
      res.send('Wrong Password')
    };
  }else{
    res.send('No such user found');
  }
  }catch(err){
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
