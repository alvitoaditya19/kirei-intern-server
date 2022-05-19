var express = require("express");
var router = express.Router();
const { tanah, updateTanah, index, getData, postData } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

// PAGES
router.get("/", index);

// API
router.get("/get", getData);
router.post("/post", postData);
router.put("/put", updateTanah);

module.exports = router;
 