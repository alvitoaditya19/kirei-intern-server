var express = require("express");
var router = express.Router();
const {pumpAPI,index, updateLampu, actionStatusLampu2, actionStatusLampu1, actionCreate } = require("./controller");
const multer = require("multer");
const os = require("os");

router.get("/", index);
router.get("/pump", pumpAPI);

router.post("/create", actionCreate);


module.exports = router;
 