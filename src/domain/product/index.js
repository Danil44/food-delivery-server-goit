const get = require("./get");
const getAll = require("./get-all");
const getByIds = require("./get-by-ids");
const getByCategory = require("./get-by-category");
const update = require("./update");

module.exports = {
  getProduct: get,
  getAllProducts: getAll,
  getByIds: getByIds,
  getByCategory: getByCategory,
  updateProduct: update
};
