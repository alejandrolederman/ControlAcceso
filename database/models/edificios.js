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

let Edificios = sequelize.define(alias, cols, config);

Edificios.associate = function(models){

    Edificios.hasMany(models.Alumnos, {
        as: "Alumnos",
        foreignKey: "edificioId"
    });
};

return Edificios;
};