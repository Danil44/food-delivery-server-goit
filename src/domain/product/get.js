const Product = require("../db/schemas/product");

const getProductById = id =>
  new Promise((res, rej) => {
    return Product.find({ id: id })
      .then(res)
      .catch(rej);
  });
module.exports = getProductById;
