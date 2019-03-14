const domain = require("../../domain");
const getUser = (req, res, next) => {
  const sendResponse = user => {
    res.send({ status: "success", user: user });
  };

  domain.userAPI
    .getUser(req.params.id)
    .then(sendResponse)
    .catch(err => console.log(err));
};

module.exports = getUser;
