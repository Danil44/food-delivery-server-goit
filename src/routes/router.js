const mainRoute = require("./main/main");
const productsRoute = require("./products/products");
const signupRoute = require("./sign-up/signup");

const routes = {
  "/products": productsRoute,
  "/signup": signupRoute,
  default: mainRoute
};

module.exports = routes;
