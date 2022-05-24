module.exports = function (sequelize, dataTypes) {
    let alias = "categoria";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tabletName:"categoria",
        timestamps: false
    };

let Categoria = sequelize.define(alias, cols, config);

Categoria.associate = function(models){

    Categoria.hasMany(models.usuarios, {
        as: "usuarios",
        foreignKey: "categoriaId"
    });
};

return Categoria;
};