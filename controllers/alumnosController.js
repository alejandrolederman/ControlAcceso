const db = require("../database/models")

let alumnosController = {

    listado: function (req, res){
        db.alumno.findAll()
        .then(function(alumno){
            res.render("listadoAlumnos", {alumno:alumno});
        })
        .catch(function(err){
            console.log(err)
        })
    },




};
module.exports = alumnosController;