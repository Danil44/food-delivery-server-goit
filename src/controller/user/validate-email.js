const domain = require("../../domain");

const validateEmail = (req, res, next) => {
  const sendReject = () => {
    res.send({
      error: "This email is already registered"
    });
  };
  domain.userAPI
    .validateEmail(req.body.email)
    .then(user => {
      if (user.length > 0) {
        sendReject();
        return;
      } else next();
    })
    .catch(err => console.log(err));
};

module.exports = validateEmail;
