const getAll = require("./get-all");
const get = require("./get");
const create = require("./create");
const update = require("./update");
const validate = require("./validate");

module.exports = {
  getAllUsers: getAll,
  getUser: get,
  createUser: create,
  updateUser: update,
  validateEmail: validate
};
