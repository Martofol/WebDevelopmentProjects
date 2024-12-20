import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{
    firstName: req.body["fName"],
    lastName: req.body["lName"]
  });
});

app.post("/submit", (req, res) => {
  res.render("index.ejs",{
    firstName: req.body["fName"],
    lastName: req.body["lName"]
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
