const https = require("https");
const url = require("url");
const fs = require("fs");
const morgan = require("morgan");
const router = require("../routes/router");
const getRouteHandler = require("../helpers/get-route-handler");

const logger = morgan("combined");

const options = {
  key: fs.readFileSync(path.resolve("src/ssl/server.key")),
  cert: fs.readFileSync(path.resolve("src/ssl/server.crt")),
  csr: fs.readFileSync(path.resolve('src/ssl/server.csr'))
};

const startServer = port => {
  const server = https.createServer(options, (req, res) => {
    const parsedUrl = url.parse(req.url);
    const func = getRouteHandler(router, parsedUrl.pathname, parsedUrl.query) || router.default;

    logger(req, res, () => func(req, res));
  });
  server.listen(port);
};

module.exports = startServer;
