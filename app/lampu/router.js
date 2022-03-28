var express = require("express");
var router = express.Router();
const {lampu,index, updateLampu, actionStatusLampu2, actionStatusLampu1, actionCreate } = require("./controller");
const multer = require("multer");
const os = require("os");

router.get("/", index);
router.get("/lampu", lampu);

router.put("/lampu/update",multer({ dest: os.tmpdir() }).single("image"), updateLampu);
router.put("/lampu1/:id", actionStatusLampu1);
router.put("/lampu2/:id", actionStatusLampu2);
router.post("/post",  multer({ dest: os.tmpdir() }).single("image"), actionCreate);

module.exports = router;
 