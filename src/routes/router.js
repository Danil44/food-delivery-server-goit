const express = require("express");
const mainRoute = require("./main/main");
const getProduct = require("./products/products");
const createUser = require("./users/create-user");
const getUser = require("./users/get-user");
const createOrder = require("./orders/create-order");
const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .get("/products/:id", getProduct)
  .get("/products/", getProduct)
  .get("/users/:id", getUser)
  .post("/users", createUser)
  .post("/orders", createOrder);

module.exports = apiRoutes;
