const server = require('./src/app.js');
const { conn } = require('./src/db.js');


// conn.sync({ alter: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); 
//   });
// });

server.listen(3003, async() => {
  await conn.sync({alter:true}),
  console.log('%s listening ' ); 
})