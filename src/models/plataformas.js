const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = ( sequelize ) => {

    sequelize.define('plataforma', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull:false,
            unique:true,
            validate:{
                isAlpha: true, 
            }
        },   
        Nombre: {
            type: DataTypes.STRING,
            unique:true,
            allowNull:false,
            validate:{
              isAlpha: true,
              len: [3,12]
            }
        }
    })
}