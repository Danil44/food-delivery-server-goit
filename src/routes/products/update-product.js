const Product = require("../../modules/db/schemas/product");

const updateProduct = (req, res, next) => {
  const sendRespone = product => {
    res.send({ status: "success", product: product });
  };

  Product.findOneAndUpdate({ id: req.params.id }, req.body)
    .then(() => {
      Product.findOne({ id: req.params.id }).then(sendRespone);
    })
    .catch(next);
};

module.exports = updateProduct;
