const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = ( sequelize ) => {

  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }, 
    nombre: {
        type: DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
          len: [3,30],
        }
    },
    imagen_backgrund:{
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isUrl: true,   
        len: [3,400],
      }
    },
    Description:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        len: [3,300],
      }
    },
    Fecha_de_lanzamiento:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
      len: [3,10],
      isAfter: "1910-01-01",
      isBefore: "2023-01-01"
     }
    },
    Rating:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
      isNumeric: true, 
      max: 5,
      min: 1,
     }
   }
  });
};