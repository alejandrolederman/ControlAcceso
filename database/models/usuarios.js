module.exports = function (sequelize, dataTypes) {
    let alias = "usuarios";
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

        categoriaId: {
            type: dataTypes.INTEGER
        },

    }

    let config = {
        tabletName: "usuarios",
        timestamps: false
    }


let Usuarios = sequelize.define(alias, cols, config);

Usuarios.associate = function(models){

    Usuarios.belongsTo(models.categoria, {
        as: "categoria",
        foreignKey: "categoriaId"
    });
};

return Usuarios;
};