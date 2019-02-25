const Order = require("../../modules/db/schemas/order");

const saveOrder = orderData => {
  return Order.create(orderData)
};

const createOrder = (req, res, next) => {
  const order = req.body;

  const sendResponse = () => {
    res.send({ order });
  };

  saveOrder(order)
    .then(sendResponse)
    .catch(next);
};
module.exports = createOrder;
