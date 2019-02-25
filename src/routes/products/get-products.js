const Product = require("../../modules/db/schemas/product");

const getQueryKey = query => {
  for (let key in query) {
    return key;
  }
};

const getProductsByIds = ids => {
  return Product.find({
    id: ids.map(id => id)
  });
};

const getProductsByCategories = categories => {
  return Product.find({
    categories: categories.map(category => category)
  });
};

const getProducts = (req, res, next) => {
  let params = [];
  let key = "";
  const queryObj = Object.entries(req.query);

  const sendResponse = products => {
    res.send({ products });
  };

  if (queryObj.length === 0) {
    return Product.find()
      .then(sendResponse)
      .catch(next);
  }

  if (req.query) {
    const query = req.query;
    key = getQueryKey(query);
    params = query[key].replace(/['"]+/g, "").split(",");
  }

  if (key === "ids") {
    getProductsByIds(params)
      .then(sendResponse)
      .catch(next);
  } else if (key === "categories") {
    getProductsByCategories(params)
      .then(sendResponse)
      .catch(next);
  }
};

module.exports = getProducts;
