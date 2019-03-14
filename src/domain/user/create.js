const User = require("../db/schemas/user");
const bcrypt = require("bcrypt");
const core = require("../../core");
const { pick } = require("lodash");

const saveUserInDB = userData => {
  return User.create(userData);
};

const pickUserFields = user => {
  pick(user, ["firstName", "lastName", "telephone", "password", "email"]);
};

const createNewUser = user =>
  new Promise((resolve, reject) => {
    const errors = core.userErrors(user);

    if (errors.length !== 0) {
      reject(errors);
      return;
    }

    const hashedPassword = bcrypt.hashSync(user.password, 10);
    const userData = { ...user, password: hashedPassword };

    return saveUserInDB(userData)
      .then(user => {
        return User.findOne({ _id: user._id });
      })
      .then(pickUserFields)
      .then(resolve(userData))
      .catch(reject);
  });

module.exports = createNewUser;
