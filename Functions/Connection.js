var mysql = require('mysql');
// Initialize pool
var con      =    mysql.createPool({

    //host: "192.168.1.33",
    //host: "localhost",
  /*  host: "88.250.131.163",
    user: "bay66",
    password: "super66",
    database: "Mrts2020",
*/

    host: "localhost",
    user: "Bay77",
    password: "Capan66-bud",
    database: "BudgetAngel",


    connectionLimit : 10,
    connect_timeout:1000,
    debug    :  false
    // connectionLimit : 10,
    // host     : '127.0.0.1',
    // user     : 'root',
    // password : 'root',
    // database : 'db_name',
    // debug    :  false
});    
module.exports = con;


// const con = mysql.createConnection({
//     //host: "192.168.1.33",
//     //host: "localhost",
//     host: "88.250.131.163",
//     user: "bay66",
//     password: "super66",
//     database: "Mrts2020",
//     connect_timeout:1000,
// });
