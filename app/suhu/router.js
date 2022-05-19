var express = require("express");
var router = express.Router();
const { index, updateSuhu, getSuhu, postSuhu } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

// PAGES
router.get("/", index);

// API
router.get("/get", getSuhu);
router.post("/post", postSuhu);
router.put("/put", updateSuhu);

module.exports = router;
 