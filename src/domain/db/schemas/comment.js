const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  product: String,
  author: String,
  text: String,
  mark: Number
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
