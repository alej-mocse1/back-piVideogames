const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = ( sequelize ) => {

    sequelize.define('genere', {
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
            allowNull:false,
            unique:true,
            validate:{
              isAlpha: true,
              len: [3,30]
            }
        }
    })
}

  // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     // autoIncrement: true,
        //     allowNull:false,
        //     validate:{
        //         isAlpha: true,
        //         // max: 19,
        //         // min: 1,
        //       }
        // },