const express = require("express");
const mainRoute = require("./main/main");

const getAllProducts = require("../product/get-all-products");
const getProductById = require("../product/get-product-by-id");
const updateProduct = require("../product/update-product");
const validateEmail = require("../user/validate-email");

const createUser = require("../user/create-user");
const getUser = require("../user/get-user");
const getAllUsers = require("../user/get-all-users");
const updateUser = require("../user/update-user");
const login = require("../authentication/login");
const logout = require("../authentication/logout");
const verifyToken = require("../authentication/verify-token");

const createOrder = require("../order/create-order");
const getOrder = require("../order/get-order");

const addImage = require("./image/add-image");

const apiRoutes = express.Router();

const errorMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(422).send({ error: err.message });
};

apiRoutes
  .get("/", mainRoute)
  .get("/products/:id", getProductById)
  .get("/products", getAllProducts)
  .put("/products/:id", updateProduct)

  .get("/users/:id", getUser)
  .get("/users", getAllUsers)
  .post("/auth/register", validateEmail, createUser)
  .put("/users/:id", updateUser, errorMiddleware)

  .post("/auth/login", login)
  .use(verifyToken)
  .post("/auth/logout")

  .get("/orders/:id", getOrder, errorMiddleware)
  .post("/orders", createOrder, errorMiddleware)

  .post("/images", addImage());

module.exports = apiRoutes;
