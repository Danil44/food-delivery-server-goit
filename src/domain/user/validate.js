const User = require("../db/schemas/user");

const validateEmail = email => {
  return User.find({ email: email }, err => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = validateEmail;
