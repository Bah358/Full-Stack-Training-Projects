import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port=3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended:true}));

function authcheck(req,res,next){
    const password = req.body["password"];
    if (password==="ILoveFarah"){
        userIsAuthorised = true;
    }
    next();
}

app.use(authcheck);

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req,res) => {
    if (userIsAuthorised){
        res.sendFile(__dirname + "/public/secret.html");
        userIsAuthorised = false;
    }
    else{
    res.sendFile(__dirname + "/public/index.html");
    }
})


app.listen(port, ()=>{
    console.log (`The app is listening at port: ${port}`);
} )


