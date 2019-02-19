const allProducts = require("../../db/products/all-products.json");

const getAllProducts = res => {
  res.set("Content-Type", "application/json");
  res.status(200);
  res.json(allProducts);
};

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
  let status = "success";
  let products = [];
  let params = [];
  debugger;
  const queryObj = Object.entries(req.query);
  const paramsObj = Object.entries(req.params);
  // Check if it's get all products request
  if (paramsObj.length === 0 && queryObj.length === 0) {
    return getAllProducts(res);
  }

  if (queryObj.length !== 0) {
    const query = req.query;
    const key = getQueryKey(query);
    params = query[key].replace(/['"]+/g, "").split(",");
  } else {
    params = req.params.id.split(",");
  }

  products = getProductFromDb(params);

  if (products.length < 1) status = "no products";

  res.set("Content-Type", "application/json");
  res.status(200);
  res.json({ status: status, product: products });
};

module.exports = getProduct;
