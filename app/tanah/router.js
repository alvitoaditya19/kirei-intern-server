var express = require("express");
var router = express.Router();
const { tanah, updateTanah } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

router.post("/tanah",multer({ dest: os.tmpdir() }).single("image"), tanah);
router.put("/tanah/update",multer({ dest: os.tmpdir() }).single("image"), updateTanah);


module.exports = router;
 