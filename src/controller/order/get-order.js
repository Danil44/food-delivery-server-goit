const domain = require("../../domain");

const getOrder = (req, res, next) => {
  const sendResponse = order => {
    res.send({ order: order });
  };

  domain.orderAPI
    .getOrder(req.params.id)
    .then(sendResponse)
    .catch(next);
};

module.exports = getOrder;
