var express = require("express");
var router = express.Router();
const { getData, postData, updateData } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

router.post("/", postData);
router.get("/", getData);
router.put("/", multer({ dest: os.tmpdir() }).single("image"), updateData);


module.exports = router;
