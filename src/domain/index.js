const user = require("./user");
const product = require("./product");
const order = require("./order");
const auth = require("./authentication");
const comment = require("./comment");

module.exports = {
  userAPI: user,
  productAPI: product,
  orderAPI: order,
  authAPI: auth,
  commentAPI: comment
};
