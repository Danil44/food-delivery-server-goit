const Order = require("../../modules/db/schemas/order");

const getOrder = (req, res, next) => {
  const sendResponse = order => {
    res.send({ status: "success", order: order });
  };

  Order.findOne({ _id: req.params.id })
    .then(sendResponse)
    .catch(next);
};

module.exports = getOrder;


