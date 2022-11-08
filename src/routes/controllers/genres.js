const axios = require('axios');
require('dotenv').config();


const{DB_APPI} = process.env;

const searchGenres = async () => {

    const SearchGenress = await axios.get(`https://api.rawg.io/api/genres?key=${DB_APPI}`);

    const results = SearchGenress.data.results.map((Element) => {
        return { 
            Nombre: Element.name
         }
    })
    
    return results;
}

module.exports = { searchGenres }