const User = require("../../modules/db/schemas/user");

const updateUser = (req, res, next) => {

  const sendResponse = user => {
    res.send({ status: "success", user: user });
  };

  User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      User.findOne({ _id: req.params.id }).then(sendResponse);
    })
    .catch(next);
};

module.exports = updateUser;
