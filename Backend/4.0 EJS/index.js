import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { send } from "process";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;

app.get("/", (req, res)=>{
    const today = new Date();
    var day = today.getDay();

    let type = "Week Day";
    let adv = "Work Hard";

    if(day === 0 || day === 6){
        type = "Weekend day";
        adv = "Party Hard";
    }

    res.render("index.ejs",{
        dayType: type,
        advice: adv
    });    

    
})

app.listen(port, () =>{
    console.log("App is running on port " + port);
})