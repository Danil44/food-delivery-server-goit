const express = require("express");
const mainRoute = require("./main/main");
const getProduct = require("./products/products");
const createUser = require("./users/create-user");
const getUser = require("./users/get-user");
const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .get("/products/:id", getProduct)
  .get("/products/", getProduct)
  .get("/users/:id", getUser)
  .post("/users", createUser);

module.exports = apiRoutes;
