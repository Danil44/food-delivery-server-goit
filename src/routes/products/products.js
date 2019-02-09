const allProducts = require("../../db/products/all-products.json");

const productsRoute = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(allProducts));
  res.end();
};

module.exports = productsRoute;
