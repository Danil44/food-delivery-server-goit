const User = require("../db/schemas/user");

const getUser = id =>
  new Promise((res, rej) => {
    return User.findOne({ _id: id })
      .then(res)
      .catch(rej);
  });

module.exports = getUser;
