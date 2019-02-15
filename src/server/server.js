const http = require("http");
const url = require("url");
const fs = require("fs");
const morgan = require("morgan");
const router = require("../routes/router");
const getRouteHandler = require("../helpers/get-route-handler");

const logger = morgan("combined");

const startServer = port => {
  const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const func = getRouteHandler(router, parsedUrl.pathname, parsedUrl.query) || router.default;

    logger(req, res, () => func(req, res));
  });
  server.listen(port);
};

module.exports = startServer;
