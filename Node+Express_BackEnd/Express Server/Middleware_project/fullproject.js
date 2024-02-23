import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import {fileURLToPath} from "url";

const app = express();
const port = 3000;
var band_name = "";
var band_name2= ""
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));



app.get("/", (req,res)=>{
  res.sendFile( __dirname + "/public/index2.html");
})

app.post("/submit", (req,res) =>{
  band_name ="Name:  " + req.body["name"];
  band_name2 = "Email:  " + req.body["email"];
  res.send(`<h1>Your Name and E-mail are :</h1><div>${band_name}<div/><div>${band_name2}</div>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
