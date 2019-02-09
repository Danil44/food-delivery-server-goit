const fs = require("fs");
const path = require("path");

const saveUser = user => {
  const username = user.username;

  const filePath = path.join(
    __dirname,
    "../../",
    "db/users",
    `${username}.json`
  );

  fs.writeFile(filePath, JSON.stringify(user), err => {
    if (err) {
      return console.log("We got some problems :( :", err);
    }
    console.log("The file was saved!");
  });
};

const signupRoute = (req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", function(data) {
      body += data;
    });

    req.on("end", function() {
      const data = JSON.parse(body);

      saveUser(data);

      const dataResponse = {
        status: "success",
        user: data
      };
      
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(dataResponse));
      res.end();
    });
  }
};
module.exports = signupRoute;
