const { port } = require("./config");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

const allProducts = require("./src/db/products/all-products.json");
const users = require("./src/db/users/users.json");

app.get("/products", (request, response) => {
  response.header("Content-Type", "application/json");
  response.send(JSON.stringify(allProducts));
});

app.get("/signup", urlencodedParser, function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/signup", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  res.send(
    `${req.body.userName}<br> 
    ${req.body.userTelephone}<br> 
    ${req.body.userPass}<br> 
    ${req.body.userEmail}`
  );
});

app.listen(port);
