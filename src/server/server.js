const http = require("http");
const url = require("url");

const morgan = require("morgan");
const router = require("../routes/router");

const logger = morgan("combined");

const startServer = port => {
  const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url)

    console.log(parsedUrl)
  })
}

module.exports = startServer