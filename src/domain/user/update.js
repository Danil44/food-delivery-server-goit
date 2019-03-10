const User = require("../db/schemas/user");
const bcrypt = require("bcrypt");

const updateUser = (params, body) =>
  new Promise((res, rej) => {
    if (body.password) {
      const newHashedPass = bcrypt.hashSync(body.password, 10);
      body.password = newHashedPass;
    }
    return User.findOneAndUpdate({ _id: params.id }, body)
      .then(() => {
        User.findOne({ _id: params.id }).then(res);
      })
      .catch(rej);
  });

module.exports = updateUser;
