const allProducts = require("../../db/products/all-products.json");

const getProductFromDb = id => {
  return allProducts.filter(product => product.id === +id);
};

const getProduct = (req, res) => {
  let status;
  let products;
  if (req.query) {
    debugger;

    paramsArr = query[key].replace(/['"]+/g, "").split(",");
  }

  const id = req.params.id;
  products = getProductFromDb(id);

  if (products.length < 1) status = "no products";

  res.set("Content-Type", "application/json");
  res.status(200);
  res.json({ status: status, product: products });
};

module.exports = getProduct;
//
