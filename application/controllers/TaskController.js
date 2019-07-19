const db = require("../../boot/db");
const taskStatus = require("../helpers/types/TaskStatus");

exports.index = (req, res) => {
  db.query(
    "SELECT `id`, `title`, `assignee`, `category`, `status` FROM `tasks`",
    (err, tasks) => {
      if (err) throw err;
      const data = {
        tasks,
        taskStatus
      };
      res.render("task/index", data);
    }
  );
};
