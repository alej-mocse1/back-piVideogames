const { DataTypes } = require('sequelize');


module.exports = ( sequelize ) => {

    sequelize.define('genere', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate:{
                isNumeric: true
              }
        },   
        Nombre: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
              isAlpha: true,
              len: [3,30],
            }
        }
    })
}