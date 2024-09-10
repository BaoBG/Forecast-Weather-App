import bodyParser from "body-parser";
import express from "express";

const app = new express();
const port = 3000;

const API_WEATHER = "";
const API_MAP = "";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/help", (req, res) => {
    res.render("help.ejs")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});