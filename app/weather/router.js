var express = require("express");
var router = express.Router();
const { cuaca, updateCuaca } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

router.post("/cuaca",multer({ dest: os.tmpdir() }).single("image"), cuaca);
router.put("/cuaca/update",multer({ dest: os.tmpdir() }).single("image"), updateCuaca);


module.exports = router;
 