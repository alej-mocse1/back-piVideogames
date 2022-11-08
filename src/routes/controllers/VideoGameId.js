const axios = require('axios');
require('dotenv').config();

const{DB_APPI} = process.env;

const videogameID = async (id) => {

    const resp = await axios.get(`https://api.rawg.io/api/games/${id}?key=${DB_APPI}`);

    const generes =  resp.data.genres.map(element => {
        return element.name
        })

    const platform = resp.data.platforms.map((element) => {
        return element.platform.name
        })

    const obj = {
        imagen_backgrund: resp.data.background_image,
        nombre: resp.data.name,
        Descripción: resp.data.description,
        Fecha_de_lanzamiento: resp.data.released,
        Rating:resp.data.rating,
        genres: generes,
        Plataformas: platform
    }
   
    return obj    
}
    // Los campos mostrados en la ruta principal para cada videojuego (imagen, nombre, y géneros)
    // Descripción
    // Fecha de lanzamiento
    // Rating
    // Plataformas

module.exports = { videogameID }