require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 5001;

const animes = [];

app.get("/", hello);

function hello(request, response) {
  response.status(200).json({
    message: "Hello",
  });
}

app.get("/hello/:name", helloName);

function helloName(req, res) {
  const { name } = req.params;
  res.status(201);
  res.status(200);
  res.send(`<p>Hello ${name.toUpperCase()}</p>`);
}

app.post("/animes", createAnime);

function createAnime(req, res) {
  const anime = req.body;

  console.log(req.body);
  if (!anime) {
    res.sendStatus(404);
  }

  anime.id = animes.length;

  animes.push(anime);
  console.log({ animes });

  const route = `http://localhost:${port}/animes/${anime.id}`;

  res.json({
    id: anime.id,
    route,
  });
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
