var express = require("express");
var router = express.Router();
const { index, getTds, postTds, updateTds } = require("./controller");
const { isLoginPlayer } = require('../middleware/auth');
const multer = require("multer");
const os = require("os");

// PAGES
router.get("/", index);
// router.get("/suhu", getAllSuhu);
// router.post("/", postAllSuhu);

// API
router.get("/get", getTds);
router.post("/post", postTds);
router.put("/put", updateTds);

module.exports = router;
 