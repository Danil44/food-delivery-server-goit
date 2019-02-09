const mainRoute = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Hi, this is the main page");
  res.end();
};

module.exports = mainRoute;
