const { port } = require("./config");
const startServer = require("./src/server/server");

startServer(port);
