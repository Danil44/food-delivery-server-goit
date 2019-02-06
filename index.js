const { port } = require("./config");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const allProducts = require("./src/db/products/all-products.json");
const users = require("./src/db/users/users.json");

app.get("/products", (request, response) => {
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(allProducts));
});

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/signup", (req, res) => {
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(users));
});

app.listen(port);
