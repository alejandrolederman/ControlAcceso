module.exports = function (sequelize, dataTypes) {
    let alias = "edificios";
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

    Edificios.hasMany(models.alumno, {
        as: "alumno",
        foreignKey: "edificiosId"
    });
};

return Edificios;
};