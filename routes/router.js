const homeRouter = require("./home");

const init = app => {
  app.use("/", homeRouter);
};

module.exports = init;
