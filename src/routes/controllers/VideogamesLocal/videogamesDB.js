
///mapeo la info de los videojuegos creados por el cliente en la db
///y retorno un arreglo de objetos con la mismas propiedades que el arreglo que viene de la api
///para luego concatenar ambos arreglos y retornar toda la info junta


const videogameDB = (videogamesC) => {

    const arrVideoGameDB = videogamesC.map((Element) => {

        const generes = Element.generes.map(element => {
            return element.dataValues.Nombre
            })
      
        return{
            filtrado : 'db',
            id:Element.dataValues.id,
            imagen_backgrund:Element.dataValues.imagen_backgrund,
            nombre: Element.dataValues.nombre,
            rating: Element.dataValues.Rating,
            genres:generes
        }})

    // console.log(videogamesC);
    return arrVideoGameDB;
}


module.exports = { videogameDB }