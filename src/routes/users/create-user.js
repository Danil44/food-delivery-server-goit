const User = require("../../modules/db/schemas/user");

const saveNewUser = userData => {
  return User.create(userData);
};

const createNewUser = (req, res, next) => {
  const user = req.body;

  const sendResponse = user => {
    res.send({
      status: "success",
      user: user
    });
  };

  saveNewUser(user)
    .then(user => sendResponse(user))
    .catch(next);
};

module.exports = createNewUser;
