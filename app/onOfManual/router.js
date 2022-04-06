var express = require("express");
var router = express.Router();
const { actionCreate, actionStatusControl } = require("./controller");
const multer = require("multer");
const os = require("os");

router.post("/post", actionCreate);
router.put("/update", actionStatusControl);

module.exports = router;
 