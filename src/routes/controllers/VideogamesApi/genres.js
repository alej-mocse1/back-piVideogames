const axios = require('axios');
require('dotenv').config();
// const{DB_APPI} = process.env;


//buscamos la info de la api con el endpoint solicidado
// y la mapeamos en un nuevo arreglo 
//con las mismas propidadades que acepta el modelo

const searchGenres = async () => {

    const SearchGenress = await axios.get(`https://api.rawg.io/api/genres?key=49a5370f78314b399b71efd92311605c`);

    const results = SearchGenress.data.results.map((Element) => {
        return { 
            id:Element.name,
            Nombre: Element.name
         }
    })
    
    return results;
}



module.exports = { searchGenres }