const db = require("../database/models")

let alumnosController = {

    listado: function (req, res){
        db.Alumno.findAll({
            include: [{association: "edificios"}]})
        .then(function(alumnos){
            res.render("listadoAlumnos", {alumnos:alumnos});
        })
        .catch(function(err){
            console.log(err)
        })
    },




};
module.exports = alumnosController;