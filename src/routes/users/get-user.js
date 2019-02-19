const allUsers = require("../../db/users/all-users.json");

const getUserById = id => {
  return allUsers.filter(user => user.id === id);
};

const getUser = (req, res) => {
  debugger;
  let status = "success";
  const id = req.params.id;
  const user = getUserById(id);

  if (user.length < 1) status = "not found";

  res.set("Content-Type", "application/json");
  res.status(200);
  res.json({ status: `${status}`, user: user });
};

module.exports = getUser;
