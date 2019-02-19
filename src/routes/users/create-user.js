const path = require("path");
const fs = require("fs");
const uuidv4 = require("uuid/v4");
const util = require("util");
const allUsers = path.join(__dirname, "../../", "db/users/", "all-users.json");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const saveNewUser = userData => {
  let obj = {};

  let json = JSON.stringify(obj);

  return readFileAsync(allUsers, "utf8")
    .then(data => {
      obj = JSON.parse(data);
      obj.push(userData);
      json = JSON.stringify(obj);
      writeFileAsync(allUsers, json, "utf8");
    })
    .catch(err => {
      console.log(err);
    });
};

const createNewUser = (req, res) => {
  const user = req.body;
  const userData = { ...user, id: uuidv4() };

  const sendResponse = () => {
    res.set("Content-Type", "application/json");
    res.json({
      status: "success",
      user: userData
    });
  };

  const sendError = () => {
    res.status(400);
    res.json({
      error: "user was not saved"
    });
  };

  saveNewUser(userData)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = createNewUser;
