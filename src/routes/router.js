const productsRoute = require("./products/products");
const signupRoute = require("./sign-up/signup");

const routes = {
  '/products': productsRoute,
  '/signup': signupRoute
};

module.exports = routes;
