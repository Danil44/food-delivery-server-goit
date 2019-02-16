const path = require("path");
const fs = require("fs");
const uuidv4 = require("uuid/v4");
const allProducts = require("../../db/products/all-products.json");

const saveOrderToDb = orderData => {
  dataStr = JSON.stringify(orderData);
  debugger;

  try {
    if (!fs.existsSync("src/db/users/orders")) {
      fs.mkdir("src/db/users/orders", err => {
        if (err) console.log(err);
      });
    }
    const src = path.resolve(
      __dirname,
      "../../",
      "db/users/orders",
      "orders.json"
    );

    fs.writeFile(src, dataStr, err => {
      if (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const getProductsFromDb = products => {
  return allProducts.filter(product => {
    return products.find(id => {
      return product.id === +id;
    });
  });
};

const createOrder = (req, res) => {
  const order = req.body;
  const products = getProductsFromDb(order.products);
  let status = "success";
  let orderData = { id: uuidv4(), ...order };

  if (products.length < 1) {
    orderData = null;
    status = "failed";
  }

  saveOrderToDb(orderData);

  res.status(200);
  res.set("Content-Type", "application/json");
  res.json({ status: status, order: orderData });
};
module.exports = createOrder;
