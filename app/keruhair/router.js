var express = require("express");
var router = express.Router();
const { index, getTds, postTds, updateTds } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

/* GET home page. */
router.get("/", getTds);
// router.get("/suhu", getAllSuhu);
// router.post("/", postAllSuhu);


router.post("/", postTds);
router.put("/", updateTds);

module.exports = router;
 