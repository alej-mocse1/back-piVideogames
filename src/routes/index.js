const { Router } = require('express');
const { getVideosgames } = require('./controllers/VideogamesApi/videoGames.js');
const { SeachVideoGames } = require('./controllers/VideogamesApi/SeachVideoGames.js');
const { videogameID } = require('./controllers/VideogamesApi/VideoGameId.js');
const { searchGenres } = require('./controllers/VideogamesApi/genres.js');
const { createVideoGame } = require('./controllers/VideogamesLocal/createVideogame.js');
const { videogameDB } = require('./controllers/VideogamesLocal/videogamesDB.js');
const { videogameDBID } = require('./controllers/VideogamesLocal/videeogameDBid.js')



const { Genere } = require('../db.js');
const { Videogame } = require('../db.js');
const { Plataforma } = require('../db.js');


const router = Router();


router.post('/videogames', async (req,res) => {
   
   const { nombre , description , Fecha_de_lanzamiento , Rating , Plataformas , generes , imagen_backgrund} = req.body;
 
   try {
      const result = await createVideoGame( nombre , description , Fecha_de_lanzamiento , Rating , Plataformas , generes , imagen_backgrund);
      const newGame = await Videogame.create(result);
      await newGame.addGeneres(generes)
      await newGame.addPlataformas(Plataformas)

      res.status(200).send('video juego creado con exito')
   } catch (error) {
      res.status(404).send(error.message)
   }
   
})


router.get('/videogames' , async (req,res) => {
   
   const { search } = req.query;
 

   if(search){
      try { 
         const resp = await SeachVideoGames(search);  
         const VideogamesCreados = await Videogame.findAll();
         res.status(200).send(resp)     
       } catch (error) {
         res.status(404).send(error.message)
      }
   }
   else{
      try {
       
         const resp = await getVideosgames();   
         const VideogamesCreados = await Videogame.findAll({include: Genere});
         const ArrVideogame = await videogameDB(VideogamesCreados);  

         res.status(200).json([... resp, ...ArrVideogame])
      } catch (error) {
        res.status(404).send(error.message);
     }
   }
})


router.get('/videogames/:id' , async (req,res) => {

   const  { id } = req.params;

console.log(id.length);

if(id.length < 36){
   try {  
      const resp = await videogameID(id)
      res.status(200).json(resp)
       
    } catch (error) {
       res.status(400).json(error.message)
    }
 }
 else{

   try {  
      const VideogamesCreados = await Videogame.findAll({include: Genere});
      const VideogamesCreados2 = await Videogame.findAll({include: Plataforma});
      const resp = await videogameDBID(VideogamesCreados,VideogamesCreados2,id)

      res.status(200).json(resp)
       
    } catch (error) {
       res.status(400).json(error.message)
    }
 
 }
})





router.get('/genres', async (req,res) => {

 const arrGenres = await Genere.findAll();

 if(arrGenres.length === 0){
   try {
      const genres = await searchGenres();
      Genere.bulkCreate(genres);
      res.status(200).send('se guardaron los datos en la db');
    } catch (error) {
       res.status(404).send(error.message)
    }
 }
 else{
   try {
      res.status(200).send('los datos ya estan almacenados en la db')
   } catch (error) {
      res.status(404).send(error.message)
   }
 }

})



//ultilizo un arreglo definido para crear diferentes registros de plataformas
//y luego relacionar estas plataformas con el videojuego creado por el cliente
// si ya se encuentran creados estos registros repondo con un mensaje


router.get('/plataformas', async (req,res) => {

   const arrPlataforma = await Plataforma.findAll();

   if(arrPlataforma.length === 0 ){
      try {
         const plataformas = [{id:"PC", Nombre:"PC"}, {id:"PlayStation 5",Nombre:"PlayStation 5"},  {id:"PlayStation 4",Nombre:"PlayStation 4"},  {id:"Xbox One",Nombre:"Xbox One"},  {id:"Xbox Series S/X",Nombre:"Xbox Series S/X"},  {id:"Android",Nombre:"Android"},  {id:"iOS",Nombre:"iOS"},  {id:"Xbox 360",Nombre:"Xbox 360"},  {id:"Xbox",Nombre:"Xbox"},  {id:"PlayStation 3",Nombre:"PlayStation 3"},  {id:"PlayStation 2",Nombre:"PlayStation 2"}]
         Plataforma.bulkCreate(plataformas);  
         res.status(200).send('se guardaron los datos en la db');
         
      } catch (error) {
         res.status(404).send(error.message)
      }
   }
      
   else{
      try {
         res.status(200).send('los datos ya estan almacenados en la db')   
      } catch (error) {
         res.status(404).send(error.message)
      }
      
   }

})










 module.exports = router;
