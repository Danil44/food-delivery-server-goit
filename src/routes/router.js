const express = require("express");
const mainRoute = require("./main/main");

const getProducts = require("./products/get-products");
const getProductById = require("./products/get-product-by-id");
const updateProduct = require("./products/update-product");

const createUser = require("./users/create-user");
const getUser = require("./users/get-user");
const getAllUsers = require("./users/get-all-users");
const updateUser = require("./users/update-user");

const createOrder = require("./orders/create-order");
const getOrder = require("./orders/get-order");

const addImage = require("./image/add-image");

const apiRoutes = express.Router();

const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
};

apiRoutes
  .get("/", mainRoute)
  .get("/products/:id", getProductById)
  .get("/products", getProducts, errorMiddleware)
  .put("/products/:id", updateProduct, errorMiddleware)

  .get("/users/:id", getUser)
  .get("/users", getAllUsers)
  .post("/users", createUser, errorMiddleware)
  .put("/users/:id", updateUser, errorMiddleware)

  .get("/orders/:id", getOrder, errorMiddleware)
  .post("/orders", createOrder, errorMiddleware)

  .post("/images", addImage());

module.exports = apiRoutes;
