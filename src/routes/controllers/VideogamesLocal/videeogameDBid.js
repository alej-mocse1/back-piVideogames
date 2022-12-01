

const videogameDBID = (juegos1,juegos2 ,id) => {

let obj = {
        imagen_backgrund: '',
        nombre: '',
        Descripción: '',
        Fecha_de_lanzamiento:'',
        Rating:'',
        genres: [],
        Plataformas: []    
}


for(let i = 0 ; i < juegos1.length ; i++){
    
    if(juegos1[i].dataValues.id == id){
      
        obj.genres = juegos1[i].dataValues.generes.map(element => {
            return element.dataValues.Nombre
           })

     }

}


    for(let i = 0 ; i < juegos2.length ; i++){

        if(juegos2[i].dataValues.id == id){

            obj.imagen_backgrund = juegos2[i].dataValues.imagen_backgrund
 
            obj.nombre = juegos2[i].dataValues.nombre
    
            obj.Descripción = juegos2[i].dataValues.Description
    
            obj.Fecha_de_lanzamiento = juegos2[i].dataValues.Fecha_de_lanzamiento
    
            obj.Rating = juegos2[i].dataValues.Rating
      
            obj.Plataformas = juegos2[i].dataValues.plataformas.map(element => {
                return element.dataValues.Nombre
               })

         

         } }       



return obj

}








module.exports = { videogameDBID }