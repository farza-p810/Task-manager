const express = require("express");

const application = express();

const run = cbSuccess => {
    application.listen(process.env.APP_PORT, cbSuccess);
};

module.exports = run;
