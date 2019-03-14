const domain = require("../../domain");
const getAllUsers = (req, res, next) => {
  const sendResponse = users => {
    res.send({ users });
  };

  domain.userAPI
    .getAllUsers()
    .then(sendResponse)
    .catch(err => console.log(err));
};

module.exports = getAllUsers;
