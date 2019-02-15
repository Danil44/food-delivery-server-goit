const allProducts = require("../../db/products/all-products.json");

const getProductFromDb = ids => {
  return allProducts.filter(product => {
    return ids.find(id => product.id === +id);
  });
};

const getQueryKey = query => {
  for (let key in query) {
    return key;
  }
};

const getProduct = (req, res) => {
  let status;
  let products;

  const queryObj = Object.entries(req.query);

  if (queryObj.length !== 0) {
    const query = req.query;
    const key = getQueryKey(query);
    paramsArr = query[key].replace(/['"]+/g, "").split(",");
  }

  const id = req.params.id.split(",");
  products = getProductFromDb(id);

  if (products.length < 1) status = "no products";

  res.set("Content-Type", "application/json");
  res.status(200);
  res.json({ status: status, product: products });
};

module.exports = getProduct;
