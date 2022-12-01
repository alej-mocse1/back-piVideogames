const axios = require('axios');
require('dotenv').config();
const{DB_APPI} = process.env;

// busca los primeros videojuegos que me devuelve la api y los reduce con el slice a 15

const SeachVideoGames = async (search) => {
  
const searchVg = await axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&search=${search}`);
 
  videosGamesSearch = searchVg.data.results.map((Element) => {

    const generes = Element.genres.map(element => {
      return element.name
      })

    return {
        id: Element.id,
        imagen_backgrund: Element.background_image,
        nombre: Element.name,
        genres: generes
    }
  })

  if(videosGamesSearch.length)return videosGamesSearch.slice(0,15);
  
  else{
    return 'no se encontraron parametros de busqueda'
  }
}





module.exports = { SeachVideoGames }  