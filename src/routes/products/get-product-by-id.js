const Product = require("../../modules/db/schemas/product");

const getProductById = (req, res, next) => {
  const sendResponse = products => {
    res.send({ products });
  };

  Product.find({ id: req.params.id })
    .then(sendResponse)
    .catch(next);
};
module.exports = getProductById;
