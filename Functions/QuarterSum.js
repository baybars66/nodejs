
const mysql = require('mysql');
var Promise = require("bluebird");

const con= require ('./Connection');

// const con = mysql.createConnection({
//     //host: "192.168.1.33",
//     //host: "localhost",
//     host: "88.250.131.163",
//     user: "bay66",
//     password: "super66",
//     database: "Mrts2020",
//     connect_timeout:1000,
// });

const db  = Promise.promisifyAll(con);
module.exports.QuaALL = async (donem, cat, Est) =>{
  var Est =Est;
var period = "";
// console.log(cat);
//console.log(donem);
var sql="";
var gelen ="";
var donecek= "";
const Quarter=[' AND Depart > "2021-01-01" AND Depart < "2021-03-31"',
               ' AND Depart > "2021-04-01" AND Depart < "2021-06-31"',
               ' AND Depart > "2021-07-01" AND Depart < "2021-09-31"', 
               ' AND Depart > "2021-10-01" AND Depart < "2021-12-31"',
            ]
    //console.log(donem, cat);

switch (donem){
    case "Q1" : {
    period= Quarter[0]; 
    break;
    }
    case "Q2" : 
    period= Quarter[1];
    break;
    case "Q3" : 
    period=Quarter[2];
    break;
    case "Q4" : 
    period=Quarter[3];
    break;
    default:
    console.log("QuarterSum.Qua1");
 }
        
sql = "SELECT SUM(Amount) AS 'SUM' FROM Tum Where  Estimated = '"+Est+"' AND Category = '" + cat+ "'" + period; 

//console.log(sql);
try {
    await db.queryAsync(sql).then(function(rows){
         gelen=rows[0].SUM;
        // console.log(gelen);
         if (gelen=== null) gelen=0;
        });
}   catch(err){
    console.log(err);
    }

donecek={cat, gelen};
//console.log(donecek);
return donecek;


}



