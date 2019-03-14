const domain = require("../../domain");
const getProductById = (req, res, next) => {
  const sendResponse = products => {
    res.send({ products });
  };

  domain.productAPI
    .getProduct(req.params.id)
    .then(sendResponse)
    .catch(err => console.log(err));
};
module.exports = getProductById;
