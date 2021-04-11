
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

module.exports.Listele = async (donem, Desc, est) =>{
    //console.log("doooonem", donem);
  var Est =est;
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
        console.log("doooonem", donem);
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

sql ='SELECT Descrip, Category, COUNT(Amount) AS "Quan", SUM(Amount) AS "Sum" FROM Tum WHERE Estimated= "' + est +'" AND Descrip = "'+Desc +'"'  + period;
//sql='SELECT Descrip, Category, COUNT(Amount) AS "QUANTY", SUM(Amount) AS "DescSUM" FROM Tum WHERE Estimated= "YES" AND Descrip = "Hotel" AND Depart > "2020-01-01" AND Depart < "2020-03-31"';
   

//console.log(sql);

try {
    await db.queryAsync(sql).then(function(rows){
         gelen=rows[0];
        
         if (gelen.Descrip=== null) return;////önemli

        // console.log(gelen);
        });
}   catch(err){
    console.log(err);
    }

donecek=gelen;
//console.log(donecek);
return donecek;


}



