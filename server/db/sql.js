const mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'binyang',
  port     : 3306,
  password : 'root'
});
 
// connection.connect(function(err) {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }
 
//   console.log('connected as id ' + connection.threadId);
// });

module.exports = connection;