const domain = require("../../domain");

const createComment = (req, res) => {
  const comment = req.body;

  const sendResponse = comment => {
    res.send(comment);
  };

  domain.commentAPI
    .createComment(comment)
    .then(sendResponse)
    .catch(err => console.log(err));
};

module.exports = createComment;
