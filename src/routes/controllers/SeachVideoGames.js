const axios = require('axios');
require('dotenv').config();

const{DB_APPI} = process.env;

const SeachVideoGames = async (search) => {
  
const searchVg = await axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&search=${search}`);
 
  videosGamesSearch = searchVg.data.results.map((Element) => {

    const generes = Element.genres.map(element => {
      return element.name
      })
    
    const platform = Element.platforms.map((element) => {
      return element.platform.name
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

// Imagen
// Nombre
// Géneros


module.exports = { SeachVideoGames }  