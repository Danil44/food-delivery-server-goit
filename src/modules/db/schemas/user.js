const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'Name field is required']
  },
  lastName: String,
  telephone: String,
  password: String,
  email: String,
});

userSchema.plugin(timestamp);

const User = mongoose.model("User", userSchema);

module.exports = User;
