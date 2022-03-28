var express = require("express");
var router = express.Router();
const { index, suhu, updateSuhu } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

/* GET home page. */
router.get("/", index);
router.post("/suhu",multer({ dest: os.tmpdir() }).single("image"), suhu);
router.put("/updatesuhu/:id",multer({ dest: os.tmpdir() }).single("image"), updateSuhu);


module.exports = router;
 