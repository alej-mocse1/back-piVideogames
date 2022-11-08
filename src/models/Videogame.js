const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {

  sequelize.define('videogame', {

    id:{
      type: DataTypes.UUID,
      allowNull:false,
      primaryKey: true
    },
    nombre:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlpha: true,
        len: [3,35],
      }
    },
    Description:{
      type:DataTypes.TEXT,
      allowNull:false,
      validate:{
        len: [3,200],
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
    },
    Plataformas:{
      type:DataTypes.ENUM('ps3', 'ps4', 'ps5', 'xbox360', 'xboxX', 'PcGamer'),
      allowNull:false,
      validate:{
        isAlpha: true,
        len: [3,7],
      }
    }
  });
};


