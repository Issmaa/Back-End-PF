import server from './src/app';

server.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on port 3001`)
})


// const { conn } = require('./src/db.js');

// // conn.sync({ force: false }).then(() => {
//   server.listen(process.env.PORT || 3001, async () => {
//     console.log('%s listening at 3001'); 
//   });
// // });