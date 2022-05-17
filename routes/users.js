var express = require('express');
var router = express.Router();
var alumnosController = require("../controllers/alumnosController")

// creacion

 router.get("/crear", alumnosController.crear);

//  router.post("/crear", alumnosController.guardado);

 //listado
//  router.get("/", alumnosController.listado);

 //detalle

//  router.get("/:id", alumnosController.detalle);

 //editar

//  router.get("/editar/:id", alumnosController.editar);

//  router.post("/editar/:id", alumnosController.actualizar);

 //borrar
//  router.post("/borrar/:id", alumnosController.borrar);



module.exports = router;
