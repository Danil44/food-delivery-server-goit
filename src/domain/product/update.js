const Product = require("../db/schemas/product");

const updateProduct = (id, body) =>
  new Promise((res, rej) => {
    return Product.findOneAndUpdate({ id: id }, body)
      .then(() => {
        Product.findOne({ id: id }).then(res);
      })
      .catch(rej);
  });

module.exports = updateProduct;
