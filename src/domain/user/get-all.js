const User = require("../db/schemas/user");

const getAllUsers = () =>
  new Promise((res, rej) => {
    return User.find()
      .then(res)
      .catch(rej);
  });

module.exports = getAllUsers;
