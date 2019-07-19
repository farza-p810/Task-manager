const express = require("express");

const application = express();

const run = cbSuccess => {
  application.listen(5000, cbSuccess);
};

module.exports = run;
