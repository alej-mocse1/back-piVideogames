

///realizo las mismas validaciones que en la db 
/// si no hay nada extraño creo un nuevo objeto y lo retorno


const createVideoGame = (nombre , description , Fecha_de_lanzamiento , Rating , Plataformas , generes , imagen_backgrund) => {

  if (typeof nombre !== "string") throw new Error('el nombre debe ser de tipo String');
  if (typeof description !== "string") throw new Error('el nombre debe ser de tipo String');
  if (typeof Fecha_de_lanzamiento !== "string") throw new Error('el nombre debe ser de tipo String');
  if (typeof Rating !== "number") throw new Error('el rating debe ser un valor numerico');


  if(nombre.length < 3 || nombre.length > 30)throw new Error('el nombre debe tener entre 3 y 30 caracteres');
  if(description.length < 3 || description.length > 300)throw new Error('la descripcion debe tener entre 3 y 300 caracteres');
  if(Fecha_de_lanzamiento.length < 3 || Fecha_de_lanzamiento.length > 10) throw new Error('la fecha de creacion de lanzamiento debe tener entre 3 y 10 caracteres');
  if(Rating > 5 || Rating < 1) throw new Error('el rating debe tener un valor minimo de 1 o un maximo de 5');
 
  
  for(const element of Plataformas){
    if(typeof element !== "string") throw new Error('las plataformas solo pueden ser datos numericos');
  }
 
  for(const element2 of generes){
    if(typeof element2 !== "string") throw new Error('las plataformas solo pueden ser datos numericos');
  }

  return {
    nombre: nombre,
    Description: description,
    imagen_backgrund:imagen_backgrund,
    Fecha_de_lanzamiento: Fecha_de_lanzamiento,
    Rating: Rating,
  }
}

module.exports = { createVideoGame }