const express = require("express");
const mainRoute = require("./main/main");
const getProduct = require("./products/products");
const createUser = require("./users/create-user");
const getUser = require("./users/get-user");
const getAllUsers = require("./users/get-all-users");
const createOrder = require("./orders/create-order");
const addImage = require("./image/add-image");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .get("/products/:id", getProduct)
  .get("/products/", getProduct)
  .get("/users/:id", getUser)
  .get("/users", getAllUsers)
  .post("/users", createUser)
  .post("/orders", createOrder)
  .post("/image", addImage());

module.exports = apiRoutes;
