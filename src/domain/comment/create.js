const Comment = require("../db/schemas/comment");

const saveComment = comment => {
  return Comment.create(comment);
};

const createComment = comment =>
  new Promise((res, rej) => {
    return saveComment(comment)
      .then(data => Comment.find({ _id: data._id }))
      .then(res)
      .catch(rej);
  });

module.exports = createComment;
