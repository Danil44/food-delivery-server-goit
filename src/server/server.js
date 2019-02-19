"use strict";

const morgan = require("morgan");
const router = require("../routes/router");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

// const options = {
//   key: fs.readFileSync(path.resolve("src/ssl/server.key")),
//   cert: fs.readFileSync(path.resolve("src/ssl/server.crt")),
//   csr: fs.readFileSync(path.resolve('src/ssl/server.csr'))
// };

const errorHandler = (req, res, next) => {
  res.status(500).send("No such page");
  next();
};

const options = {
  key: fs.readFileSync(path.resolve("src/ssl/server.key")),
  cert: fs.readFileSync(path.resolve("src/ssl/server.crt")),
  csr: fs.readFileSync(path.resolve('src/ssl/server.csr'))
};

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use("/", router)
    .use(errorHandler);


  app.listen(port);
};

module.exports = startServer;
