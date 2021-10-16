const express = require("express");
const router = express.Router();
const controller = require("./animes.controller");

router.get("/", controller.get);
router.get("/:id", controller.getById);
router.post("/", controller.create);

module.exports = router;
