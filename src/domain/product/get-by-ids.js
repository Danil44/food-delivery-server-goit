const Product = require("../db/schemas/product");

const getProductsByIds = ids =>
  new Promise((res, rej) => {
    return Product.find({
      id: ids.map(id => id)
    })
      .then(res)
      .catch(rej);
  });

module.exports = getProductsByIds;
