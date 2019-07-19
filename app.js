const express = require("express");

const application = express();

const router = require("./routes/router");
router(application);

const config = require("./boot/config");
config(application);

const run = cbSuccess => {
  application.listen(process.env.APP_PORT, cbSuccess);
};

module.exports = run;
