const user = require("./user");
const product = require("./product");
const order = require("./order");
const auth = require('./authentication')

module.exports = {
  userAPI: user,
  productAPI: product,
  orderAPI: order,
  authAPI: auth
};
