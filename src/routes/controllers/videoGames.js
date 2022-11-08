const axios = require('axios');
require('dotenv').config();

const{DB_APPI} = process.env;


const getV = async () => {

const promesas = [axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}`),
                  axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&page=2`),
                  axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&page=3`),
                  axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&page=4`),
                  axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&page=5`)]


const result = await Promise.all(promesas);

const respuesta = [];

for(let i = 0 ; i< result.length; i++ ){
  respuesta.push(result[i].data.results)}

return respuesta
}
 

const getVideosgames = async () => {

let videosjuegos = [];

const resp = await getV();
    
for(let i = 0 ; i < 5; i++){

  const aux = resp[i].map(((Element) => {

  const generes = Element.genres.map(element => {
    return element.name
    })
     
     return {
        id: Element.id,
        imagen_backgrund: Element.background_image,
        nombre: Element.name,
        genres: generes}
        }))

    videosjuegos = [ ...videosjuegos, ...aux ];
    }


 return videosjuegos
}

// Imagen
// Nombre
// Géneros

    
   

  module.exports = { getVideosgames }