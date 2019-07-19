const db = require("../../boot/db");
const taskStatus = require("../helpers/types/TaskStatus");
const cookieUtitlity = require("../utilities/cookie");

exports.index = (req, res) => {
  db.query(
    "SELECT `id`, `title`, `assignee`, `category`, `status` FROM `tasks`",
    (err, tasks) => {
      if (err) throw err;

      const data = {
        tasks,
        taskStatus,
        message: cookieUtitlity.getAndRemove(res, req, "message")
      };

      res.render("task/index", data);
    }
  );
};

exports.create = (req, res) => {
  res.render("task/create");
};

exports.store = (req, res) => {
  const formData = fields(req);
  db.query("INSERT INTO tasks SET ?", formData, (err, result) => {
    if (err) throw err;

    cookieUtitlity.set(res, "message", {
      type: "success",
      text: "وظیفه موردنظر با موفقیت ایجاد شد."
    });

    return res.redirect("/tasks");
  });
};

const fields = req => {
  const { title, category, assignee } = req.body;
  return {
    title,
    category,
    assignee,
    status: taskStatus.CREATED
  };
};
