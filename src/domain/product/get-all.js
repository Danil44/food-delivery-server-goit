const Product = require("../db/schemas/product");

const getProducts = () => new Promise((res, rej) => {
    return Product.find()
      .then(res)
      .catch(rej);
});

module.exports = getProducts;
