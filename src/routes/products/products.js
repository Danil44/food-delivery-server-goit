const allProducts = require("../../db/products/all-products.json");
const url = require("url");

const getProductById = ids => {
  return allProducts.filter(product => {
    return ids.find(id => product.id === +id);
  });
};

const getProductByCategory = categories => {
  return allProducts.filter(product => {
    return categories.find(categoryReq => {
      return product.categories.find(category => categoryReq === category);
    });
  });
};

const getId = url => {
  const lastIndex = url.lastIndexOf("/");

  if (lastIndex !== -1) {
    return url.slice(lastIndex + 1);
  }
};

const getQueryKey = query => {
  for (let key in query) {
    return key;
  }
};

const getProduct = (req, res) => {
  let status = "success";
  let products = [];
  const parsedUrl = url.parse(req.url);

  if (parsedUrl.query) {
    const query = url.parse(req.url, true).query;
    const key = getQueryKey(query);
    paramsArr = query[key].replace(/['"]+/g, "").split(",");

    if (key === "ids") {
      products = getProductById(paramsArr);
    }
    if (key === "categories") {
      products = getProductByCategory(paramsArr);
    }
  }
  debugger;

  const id = getId(parsedUrl.pathname).split(",");

  products = getProductById(id);

  if (products.length < 1) status = "no products";

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify({ status: `${status}`, product: products }));
  res.end();
};

module.exports = getProduct;
//
