const jwt = require("jsonwebtoken");
const config = require("../../../config");
const domain = require("../../domain");
const bcrypt = require("bcrypt");

const generateToken = params => {
  const secretKey = config.secret;
console.log(secretKey)
  return jwt.sign(params, secretKey, {
    expiresIn: 60 * 60 * 24
  });
};

const passMatches = (pass, hash) => bcrypt.compareSync(pass, hash);

const login = (req, res) => {
  const { email, password } = req.body;
  const onFind = (user) => {
    const correctPassword = passMatches(password, user.password);
    if (!user || !correctPassword) {
      return res.send({
        success: false,
        error: "Authentication failed"
      });
    }
    const payload = {
      password,
      email
    };
    const token = generateToken(payload);

    res.json({
      success: true,
      message: "Enjoy your token!",
      token: token
    });
  };
  domain.authAPI
    .findUser(email)
    .then(onFind)
    .catch(err => console.log(err));
};
module.exports = login;
