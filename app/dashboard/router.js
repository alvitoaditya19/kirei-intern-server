var express = require("express");
var router = express.Router();
const { index, actionStatusLampu1, actionStatusLampu2 } = require("./controller");

const { isLoginAdmin }= require('../middleware/auth'); 

/* GET home page. */
router.use(isLoginAdmin);
router.get("/", index);
router.put("/lampu1/:id", actionStatusLampu1);
router.put("/lampu2/:id", actionStatusLampu2);


module.exports = router;
