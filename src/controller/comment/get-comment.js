const domain = require("../../domain");

const getComment = (req, res) => {
  const productId = req.query.productId;
  console.log(req);
  const sendResponse = data => {
    res.send({
      status: "success",
      comments: data
    });
  };
  const ids = productId.replace(/['"]+/g, "").split(",");

  domain.commentAPI
    .getComment(ids)
    .then(sendResponse)
    .catch(err => console.log(err));
};

module.exports = getComment;
