const mongoose = require("mongoose");
const OPTS = { useNewUrlParser: true };

const connectToDb = uri => {
  mongoose.set("useCreateIndex", true);
  mongoose.connect(uri, OPTS, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log("connected");
    }
  });
};

module.exports = connectToDb;
