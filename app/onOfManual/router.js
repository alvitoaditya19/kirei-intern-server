var express = require("express");
var router = express.Router();
const { actionCreate, getData } = require("./controller");
const multer = require("multer");
const os = require("os");

router.get("/", getData);
router.post("/", actionCreate);

module.exports = router;
 