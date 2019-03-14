const domain = require("../../domain");
const updateUser = (req, res, next) => {
  const sendResponse = user => {
    res.send({ status: "success", user: user });
  };

  domain.userAPI
    .updateUser(req.params, req.body)
    .then(sendResponse)
    .catch(err => console.log(err));
};

module.exports = updateUser;
