const Comment = require("../../domain/db/schemas/comment");

const getComment = ids =>
  new Promise((res, rej) => {
    return Comment.find({ product: ids.map(id => id) })
      .then(res)
      .catch(rej);
  });

module.exports = getComment;
