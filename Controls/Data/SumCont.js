const mysql = require('mysql');
var Promise = require("bluebird");

const con= require ('../../Functions/Connection');

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

module.exports.SUM =  async (req,res)=>{

    var Gidecek={
        RealTotal : "",
        EstTotal : "",

       
    }
 
    var ulke = req.body.ulke;
    console.log("SUM dayım ", ulke);


    const q1= "SELECT SUM(Amount) AS 'RealTotal' FROM Tum WHERE name= '"+ ulke +"' AND Estimated = 'NO'";
    const q2= "SELECT SUM(Amount) AS 'EstTotal' FROM Tum WHERE name= '"+ ulke +"' AND Estimated = 'YES'";
    

    await db.queryAsync(q1).then(function(rows){
        // var string=JSON.stringify(rows);
       // rowq1 =  JSON.parse(string);
      Gidecek.RealTotal=rows[0].RealTotal;
    console.log("Ulkeler veri", Gidecek.RealTotal);
    });

    await db.queryAsync(q2).then(function(rows){
     
      Gidecek.EstTotal=rows[0].EstTotal;
      
        console.log("Ulkeler veri", Gidecek);
    });


 res.send(Gidecek);
 res.end();
    
}