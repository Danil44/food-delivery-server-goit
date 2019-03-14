const startServer = require("./src/server/server");
const connectToDb = require("./src/domain/db/connect-db");
const { port, databaseUrl } = require("./config");

startServer(port);

connectToDb(databaseUrl);
