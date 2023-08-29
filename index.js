import express from "express";
import axios from "axios";
import bodyParser from "body-parser"

const app = express();
const port = 3000;
const api_url = 'https://v2.jokeapi.dev/joke/';

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/get-joke", (req, res) => {
    res.render("joke.ejs");
});

app.get("/get-not-in-mood", (req, res) => {
    res.render("not_in_mood.ejs");
});

app.post("/get-api", async(req,res)=>{
    try {
        console.log(req.body);
        const type = req.body.type;
        const response = await axios.get(api_url+type+"?type=single");
        const result = response.data;
        console.log(result);
        res.render("joke.ejs",{joke : result.joke})
      } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("joke.ejs", {
          joke: result.message,
        });
      }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});