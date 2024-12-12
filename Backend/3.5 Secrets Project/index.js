//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

var password = 'ILoveProgramming';
var inputedPasword = ""; 

app.use(bodyParser.urlencoded({extended: true}));

function ComperePaswords(req, res, next){
    inputedPasword = req.body['password'];
    console.log(inputedPasword);
    next();
}

app.use(ComperePaswords);


app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/index.html");
    console.log("Home Page has been called");
})

app.post("/check",(req, res) =>{
    if(inputedPasword == password){
        console.log("Password is correct");
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        console.log("Password is wrong");
        res.redirect("/");
    }
})

app.listen(port, () =>{
    console.log("App is Running on Port " + port);
})