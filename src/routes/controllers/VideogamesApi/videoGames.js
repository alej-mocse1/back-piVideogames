const axios = require('axios');
require('dotenv').config();
const{DB_APPI,PORT} = process.env;


//busca los datos en la api con un promise.all para que se ejecuten al mismo tiempo
//meto en un nuevo arreglo la propiedad en la que se encuentran los datos 5 veces

const getV = async () => {

const promesas = [axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}`),
                  axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&page=2`),
                  axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&page=3`),
                  axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&page=4`),
                  axios.get(`https://api.rawg.io/api/games?key=${DB_APPI}&page=5`)]


const result = await Promise.all(promesas);

const respuesta = [];

for(let i = 0 ; i< result.length; i++ ){
  respuesta.push(result[i].data.results)
}

// console.log( respuesta[0][0]);
return respuesta
}
 

///creo un nuevo arreglo solo con los datos que me interesan
//retorno el nuevo arreglo

const getVideosgames = async () => {

let videosjuegos = [];

const resp = await getV();
    
for(let i = 0 ; i < 5; i++){

  const aux = resp[i].map(((Element) => {

  const generes = Element.genres.map(element => {
    return element.name
    })
     
     return {
        filtrado : 'api',
        id: Element.id,
        imagen_backgrund: Element.background_image,
        nombre: Element.name,
        rating:Element.rating,
        genres: generes}
        }))

    videosjuegos = [ ...videosjuegos, ...aux ];
    }


 return videosjuegos
 
}



    
   

  module.exports = { getVideosgames }