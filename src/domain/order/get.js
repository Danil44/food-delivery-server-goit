const Order = require("../db/schemas/order");

const getOrder = id =>
  new Promise((res, rej) => {
    Order.findOne({ _id: id })
      .then(res)
      .catch(rej);
  });

module.exports = getOrder;
