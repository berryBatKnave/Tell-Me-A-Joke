import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/get-joke", (req, res) => {
    res.render("joke.ejs");
});

app.get("/get-not-in-mood", (req, res) => {
    res.render("not_in_mood.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});