module.exports = function (sequelize, dataTypes) {
    let alias = "Alumno";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        firstName: {
            type: dataTypes.STRING
        },

        lastName: {
           type: dataTypes.STRING
        },

        edificioId: {
            type: dataTypes.INTEGER
        },

    }

    let config = {
        tabletName: "alumnos",
        timestamps: false
    }


const Alumno = sequelize.define(alias, cols, config);

Alumno.associate = function(models){

    Alumno.belongsTo(models.edificio, {
        as: "edificios",
        foreignKey: "edificioId"
    });
};

return Alumno;
};