const { Router } = require('express');
const { getVideosgames } = require('./controllers/videoGames.js');
const { SeachVideoGames } = require('./controllers/SeachVideoGames.js');
const { videogameID } = require('./controllers/VideoGameId.js');
const { searchGenres } = require('./controllers/genres.js');
const { Genere } = require('../db.js')



const router = Router();



router.get('/videogames' , async (req,res) => {

   const { search } = req.query;

   if(search){
      try { 
         const resp = await SeachVideoGames(search);
         res.status(200).send(resp)     
       } catch (error) {
         res.status(404).send(error.message)
      }
   }
   else{
      try {
         const resp = await getVideosgames();   
         res.status(200).json(resp);
      } catch (error) {
        res.status(404).send(error.message);
     }
   }
})


router.get('/videogames/:id' , async (req,res) => {

   const  { id } = req.params;


try {  
     const resp = await videogameID(id)
     res.status(200).json(resp)
      
   } catch (error) {
      res.status(400).json(error.message)
   }
})


router.get('/genres', async (req,res) => {

 try {
  const genres = await searchGenres();
  console.log(genres);
  Genere.bulkCreate(genres);

} catch (error) {
   res.status(404).send(error.message)
}
})


module.exports = router;
