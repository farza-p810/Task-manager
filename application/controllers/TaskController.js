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

exports.show = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT `id`, `title`, `category`, `assignee`, `status` FROM `tasks` WHERE id = ? LIMIT 1",
    [id],
    (err, tasks) => {
      if (err) throw err;
      const data = {
        task: tasks[0],
        taskStatus
      };
      res.render("task/show", data);
    }
  );
};

exports.edit = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT `id`, `title`, `category`, `assignee`, `status` FROM `tasks` WHERE `id` = ? LIMIT 1",
    id,
    (err, tasks) => {
      if (err) throw err;
      const data = {
        task: tasks[0],
        taskStatus
      };
      res.render("task/edit", data);
    }
  );
};

exports.update = (req, res) => {
  const id = req.params.id;
  const formData = fields(req);
  db.query(
    "UPDATE `tasks` SET ? WHERE id = ?",
    [formData, id],
    (err, result) => {
      if (err) throw err;

      cookieUtitlity.set(res, "message", {
        type: "success",
        text: "وظیفه موردنظر با موفقیت ویرایش شد."
      });

      return res.redirect("/tasks");
    }
  );
};

const fields = req => {
  const { title, category, assignee, status } = req.body;

  return {
    title,
    category,
    assignee,
    status: status || taskStatus.CREATED
  };
};
