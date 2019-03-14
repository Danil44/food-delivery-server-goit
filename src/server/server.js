"use strict";

const morgan = require("morgan");
const router = require("../controller/routes/router");
const bodyParser = require("body-parser");
const config = require("../../config");

const express = require("express");
const app = express();

const errorHandler = (req, res, next) => {
  res.status(500).send("No such page");
  next();
};

const startServer = port => {
  app
    .set("superSecret", config.secret)
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    .use("/", router)
    .use(errorHandler);

  app.listen(port);
};

module.exports = startServer;
