const express = require("express");
const router = express.Router();

const { index } = require("../application/controllers/HomeController");

router.get("/", index);

module.exports = router;
