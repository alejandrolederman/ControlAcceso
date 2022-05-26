module.exports = function (sequelize, dataTypes) {
    let alias = "edificio";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tabletName:"edificios",
        timestamps: false
    };

const Edificios = sequelize.define(alias, cols, config);

Edificios.associate = function(models){

    Edificios.hasMany(models.Alumno, {
        as: "alumnos",
        foreignKey: "edificioId"
    });
};

return Edificios;
};