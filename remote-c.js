const isNode = require("./utils");

function runAreInBrowserBro(c) {
  c("C API is only available for Node.js");
}

function runServer(c) {
  c("Starting the C server...");
  const express = require('express');
  const app = express();
  const port = 3000;

  app.get('/c', (req, res) => res.json(req.query.msg || ""));

  app.listen(port, () => c(`C API is listening on port ${port}!`));
}

const remoteC = function () {
  return (isNode) ? runServer(remoteC.c) : runAreInBrowserBro(remoteC.c)
};

remoteC.init = function (c) {
  this.c = c;
}

module.exports = {
  remoteC
};