const Order = require("../db/schemas/order");

const createOrder = orderData =>
  new Promise((res, rej) => {
    return Order.create(orderData)
      .then(res)
      .catch(rej);
  });
  
module.exports = createOrder;
