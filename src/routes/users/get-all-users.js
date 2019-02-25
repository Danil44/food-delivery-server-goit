const User = require("../../modules/db/schemas/user");

const getAllUsers = (req, res, next) => {
  const sendResponse = users => {
    res.send({ users });
  };

  User.find()
    .then(sendResponse)
    .catch(next);
};

module.exports = getAllUsers;