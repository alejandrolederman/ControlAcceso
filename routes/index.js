var express = require('express');
var router = express.Router();
var alumnosController = require("../controllers/alumnosController")

router.get("/listado", alumnosController.listado);

module.exports = router;
