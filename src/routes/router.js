const express = require("express");
const mainRoute = require("./main/main");
const getProduct = require("./products/products");
const signupRoute = require("./sign-up/signup");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .get("/products/:id", getProduct)
  .get("/products/", getProduct);

module.exports = apiRoutes;
