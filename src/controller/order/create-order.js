const domain = require("../../domain");

const createOrder = (req, res, next) => {
  const order = req.body;

  const sendResponse = (order) => {
    res.send({ status: "success", order: order });
  };

  domain.orderAPI
    .createOrder(order)
    .then(sendResponse)
    .catch(next);
};
module.exports = createOrder;
