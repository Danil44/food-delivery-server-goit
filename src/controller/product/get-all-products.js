const domain = require("../../domain");

const getQueryKey = query => {
  for (let key in query) {
    return key;
  }
};

const getProducts = (req, res) => {
  let params = [];
  let key = "";
  const queryObj = Object.entries(req.query);

  const sendResponse = products => {
    res.send({ products });
  };

  if (queryObj.length === 0) {
    return domain.productAPI
      .getAllProducts()
      .then(sendResponse)
      .catch(err => console.log(err));
  }

  if (req.query) {
    const query = req.query;
    key = getQueryKey(query);
    params = query[key].replace(/['"]+/g, "").split(",");
  }

  if (key === "ids") {
    domain.productAPI
      .getByIds(params)
      .then(sendResponse)
      .catch(err => console.log(err));
  } else if (key === "categories") {
    domain.productAPI
      .getByCategory(params)
      .then(sendResponse)
      .catch(err => console.log(err));
  }
};

module.exports = getProducts;
