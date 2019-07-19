const express = require("express");
const router = express.Router();
const { index } = require("../application/controllers/TaskController");

router.get("/", index);

module.exports = router;
