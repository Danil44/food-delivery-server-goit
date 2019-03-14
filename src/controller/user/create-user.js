const domain = require("../../domain");

const createNewUser = (req, res) => {
  const user = req.body;

  const sendResponse = userData => {
    res.send({
      status: "success",
      user: userData
    });
  };

  const sendError = error => {
    res.status(409);
    res.send({
      error: error
    });
  };

  domain.userAPI
    .createUser(user)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = createNewUser;
