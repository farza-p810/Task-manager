const path = require("path");
const express = require("express");

const init = app => {
  const viewPath = path.join(__dirname, "..", "application", "views");
  app.set("views", viewPath);
  app.set("view engine", process.env.VIEW_ENGINE);
  const staticPath = path.join(__dirname, "..", "public");
  app.use(express.static(staticPath));
};

module.exports = init;
