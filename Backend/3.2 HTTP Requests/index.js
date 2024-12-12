import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, DAVUD!");
})

app.get("/Contact", (req, res) => {
    res.send('<h1>DO not Contact me</h1>')
})

app.get("/About", (req, res) =>{
    res.send("Mind your own busnis");
})

app.listen(port, () => {
    console.log("App is running on port " + port + ".");
})