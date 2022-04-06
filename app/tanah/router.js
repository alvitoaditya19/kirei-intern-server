var express = require("express");
var router = express.Router();
const { tanah, updateTanah, index, getData } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

router.post("/tanah", index);

router.get("/tanah", getData);
router.put("/update",multer({ dest: os.tmpdir() }).single("image"), updateTanah);


module.exports = router;
 