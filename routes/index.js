var express = require('express');
var router = express.Router();
var alumnosController = require("../controllers/alumnosController")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('listadoAlumnos', { title: 'ALEJANDRO' });
// });

router.get("/", alumnosController.listado);

module.exports = router;
