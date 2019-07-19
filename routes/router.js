const homeRouter = require("./home");
const taskRouter = require("./task");
const init = app => {
  app.use("/", homeRouter);
  app.use("/tasks", taskRouter);
};

module.exports = init;
