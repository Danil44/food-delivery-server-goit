const dbUser = "danil44";
const dbPass = "9SNLbQMOePjxWxPb";

const config = {
  port: 3001,
  secret: "secret-key",
  databaseUrl: `mongodb+srv://${dbUser}:${dbPass}@cluster0-xkj5d.mongodb.net/test?retryWrites=true`
};

module.exports = config;
