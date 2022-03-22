var express = require("express");
var router = express.Router();
const { lampu, updateLampu } = require("./controller");
const multer = require("multer");
const os = require("os");

router.get("/lampu", lampu);
router.put("/lampu/update",multer({ dest: os.tmpdir() }).single("image"), updateLampu);

module.exports = router;
 