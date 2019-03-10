const Product = require("../db/schemas/product");

const getProductByCategory = categories =>
  new Promise((res, rej) => {
    return Product.find({
      categories: categories.map(category => category)
    })
      .then(res)
      .catch(rej);
  });

module.exports = getProductByCategory;
