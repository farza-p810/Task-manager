const express = require("express");
const router = express.Router();
const {
  index,
  create,
  store,
  show,
  edit,
  update
} = require("../application/controllers/TaskController");

router.get("/", index);
router.get("/show/:id", show);
router.get("/create", create);
router.post("/store", store);
router.get("/edit/:id", edit);
router.post("/update/:id", update);

module.exports = router;
