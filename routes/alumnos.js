var express = require('express');
var router = express.Router();
var alumnosController = require("../controllers/alumnosController")

// // creacion

//  router.get("/crear", peliculasController.crear);

//  router.post("/crear", peliculasController.guardado);

//  //listado
  router.get("/", alumnosController.listado);

//  //detalle

//  router.get("/:id", peliculasController.detalle);

//  //editar

//  router.get("/editar/:id", peliculasController.editar);

//  router.post("/editar/:id", peliculasController.actualizar);

//  //borrar
//  router.post("/borrar/:id", peliculasController.borrar);


// module.exports = router;
