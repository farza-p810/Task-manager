const express = require("express");
const router = express.Router();
const {
  index,
  create,
  store
} = require("../application/controllers/TaskController");

router.get("/", index);
router.get("/create", create);
router.post("/store", store);

module.exports = router;
