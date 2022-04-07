var express = require("express");
var router = express.Router();
const { index, updateSuhu, getSuhu, postSuhu } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

/* GET home page. */
router.get("/", getSuhu);
router.post("/", postSuhu);
router.put("/", updateSuhu);

module.exports = router;
 