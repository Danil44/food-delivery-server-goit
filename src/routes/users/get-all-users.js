const allUsers = require("../../db/users/all-users.json");

const isEmptyObject = obj => {
  return !Object.keys(obj).length;
};

const getAllUsers = (req, res) => {
  if (isEmptyObject(allUsers)) {
    console.log("There is no such data");
  } else {
    res.set("Content-Type", "application/json");
    res.status(200);
    res.json(allUsers);
  }
};

module.exports = getAllUsers;
