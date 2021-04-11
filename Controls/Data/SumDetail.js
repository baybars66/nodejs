
const express = require('express');
//const blu = require("bluebird");
const mysql = require('mysql');
var Promise = require("bluebird");


// Promise.promisifyAll(require("mysql/lib/Connection").prototype);
// Promise.promisifyAll(require("mysql/lib/Pool").prototype);
// var app= express(); 

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

module.exports.SUMDETAIL =  async (req,res)=>{
  var ulke = req.body.name;
  var hangi =req.body.est;

  const SumDetail={
        SumFood : "",
        SumLodging : "",
        SumTrans: "",
        SumOther: "",
  };

    var Food="";
    var Lodging="";
    var Trans="";
    var Other="";

    
  //var q2 = "SELECT SUM(Amount) AS 'RealFood' FROM " +ulke + " WHERE Estimated = 'NO' AND Category = 'Food'";
    var q1 = "SELECT SUM(Amount) AS 'Food' FROM Tum Where name= '" + ulke + "' AND Estimated = '" + hangi + "' AND Category = 'Food'";
    var q2 = "SELECT SUM(Amount) AS 'Lodging' FROM Tum Where name= '" + ulke + "' AND Estimated = '" + hangi + "' AND Category = 'Lodging'";
    var q3 = "SELECT SUM(Amount) AS 'Trans' FROM Tum Where name= '" + ulke + "' AND Estimated = '" + hangi + "' AND Category = 'Transportation'";
    var q4 = "SELECT SUM(Amount) AS 'Other' FROM Tum Where name= '" + ulke + "' AND Estimated = '" +hangi + "' AND Category = 'Other'";
    
    await db.queryAsync(q1).then(function(rows){
     Food= rows[0].Food;
     //console.log(rows);

    });

   await db.queryAsync(q2).then(function(rows){
    Lodging=rows[0].Lodging;
    //console.log(rows[0].name);
 
    });

    await db.queryAsync(q3).then(function(rows){
      Trans=rows[0].Trans;
      //console.log(rows[0].name);
   
    });

    await db.queryAsync(q4).then(function(rows){
      Other=rows[0].Other;
      //console.log(rows[0].name);
   
    });



  SumDetail.SumFood=Food;
  SumDetail.SumLodging=Lodging;
  SumDetail.SumTrans=Trans;
  SumDetail.SumOther=Other;

console.log(SumDetail);

res.send(SumDetail);
res.end();


}






