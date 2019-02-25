const mongoose = require("mongoose");

const connectToDb = uri => {
  mongoose.connect(uri, { useNewUrlParser: true });
  mongoose.Promise = global.Promise;
  console.log("connected");
};

module.exports = connectToDb;
