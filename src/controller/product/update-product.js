const domain = require("../../domain");
const updateProduct = (req, res, next) => {
  const sendRespone = product => {
    res.send({ status: "success", product: product });
  };

  domain.productAPI
    .updateProduct(req.params.id, req.body)
    .then(sendRespone)
    .catch(err => console.log(err));
};

module.exports = updateProduct;
