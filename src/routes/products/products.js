const allProducts = require("./src/db/products/all-products.json");

const productsRoute = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.send(JSON.stringify(allProducts));
};

module.exports = productsRoute;
