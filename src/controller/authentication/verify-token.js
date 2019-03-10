const app = require("../../server/app");
const jwt = require("jsonwebtoken");

const getToken = req =>
  req.body.token || req.query.token || req.headers["x-access-token"];

const verifyToken = (req, res, next) => {
  const token = getToken(req);
  const secretKey = app.get("superSecret");

  if (!token) {
    return res.status(403).send({
      success: false.value,
      message: "No token provided"
    });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.send({
        success: false,
        message: "Failed to authenticate token"
      });
    }
    req.decoded = decoded;
    next();
  });
};

module.exports = verifyToken;
