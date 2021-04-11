
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

Sorgula= async(mm)=>{

    sql ='SELECT SUM(Amount) AS "Sum" FROM Tum WHERE Estimated= "YES"' + mm;
        await db.queryAsync(sql).then(function(rows){
            Gidecek.EstSum.push(rows[0].Sum);

        });

     sql ='SELECT SUM(Amount) AS "Sum" FROM Tum WHERE Estimated= "NO"' + mm;
        await db.queryAsync(sql).then(function(rows){
            Gidecek.RealSum.push(rows[0].Sum);
            
        });

   


    }
