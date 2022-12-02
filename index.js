const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config()
const { PORT } =  process.env


// conn.sync({ alter: true }).then(() => {
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); 
//   });
// });

server.listen(PORT, async() => {
  await conn.sync({alter:true}),
  console.log('%s listening ' , process.env.PORT); 
})