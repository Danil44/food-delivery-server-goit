const User = require("../../modules/db/schemas/user");

const getUser = (req, res, next) => {
  const sendResponse = user => {
    res.send({ status: "success", user: user });
  };

  User.findOne({ _id: req.params.id })
    .then(sendResponse)
    .catch(next);
};

module.exports = getUser;
