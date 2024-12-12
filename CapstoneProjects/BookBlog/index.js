import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;
var posts = []

app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.render("index.ejs",{
        posts: posts,
    });
})

app.get("/upload", (req, res)=>{
    res.render("upload.ejs");
})

app.post("/upload", (req, res)=>{

})

app.get("/rules", (req, res)=>{
    res.render("rules.ejs");
})

app.get("/about", (req, res)=>{
    res.render("about.ejs");
})

app.listen(port, ()=>{
    console.log("App is running on port " + port);
})

function post(bookImage, bookName, bookDescription){
    this.bookImage = bookImage;
    this.bookName = bookName;
    this.bookDescription = bookDescription;
}