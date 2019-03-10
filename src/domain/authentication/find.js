const User = require("../db/schemas/user");

const findUser = (email) =>
  new Promise((res, rej) => {
    return User.findOne({email: email})
      .then(res)
      .catch(rej);
  });
module.exports = findUser;
