module.exports = function (sequelize, dataTypes) {
    let alias = "alumno";
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
        tabletName: "alumno",
        timestamps: false
    }


let Alumnos = sequelize.define(alias, cols, config);

Alumnos.associate = function(models){

    Alumnos.belongsTo(models.edificios, {
        as: "edificios",
        foreignKey: "edificioId"
    });
};

return Alumnos;
};