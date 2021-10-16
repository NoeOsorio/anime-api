require("dotenv").config();
const express = require("express");
const app = express();
const animes = require("./Animes/animes.router");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const port = process.env.PORT || 5001;

// Routes
app.use("/animes", animes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
