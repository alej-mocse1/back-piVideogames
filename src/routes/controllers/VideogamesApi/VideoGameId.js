const axios = require('axios');
require('dotenv').config();
const{DB_APPI} = process.env;


///busco con el endopint solicitado en la consigna los datos de videojuego
///creo un objeto con los datos me que sirven y lo retorno

const videogameID = async (id) => {


    const resp = await axios.get(`https://api.rawg.io/api/games/${id}?key=49a5370f78314b399b71efd92311605c`);

    const generes =  resp.data.genres.map(element => {
        return element.name
        })

    const platform = resp.data.platforms.map((element) => {
        return element.platform.name
        })
        
     
     return  {
        imagen_backgrund: resp.data.background_image,
        nombre: resp.data.name,
        Descripción: resp.data.description_raw,
        Fecha_de_lanzamiento: resp.data.released,
        Rating:resp.data.rating,
        genres: generes,
        Plataformas: platform  
    }
   

}


module.exports = { videogameID }