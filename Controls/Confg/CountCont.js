const mysql = require('mysql');

const con= require ('../../Functions/Connection');

// const con = mysql.createConnection({
 

//     //host: "192.168.1.33",
//     //host: "localhost",
//     host: "88.250.131.163",
//     user: "bay66",
//     password: "super66",
//     database: "Mrts2020",
//     connect_timeout:1000,
   
//    });

// GET Country ALL
 
module.exports.CountALL = (req,res)=>{
    con.query("SELECT name FROM Country",  (err, result, fields) => {
    if (!err){
      res.send(result);
      res.end();
    }
    else
      console.log(err);
    })
  }
  
  
  // ADD Country
  
  module.exports.CountADD = (req,res)=>{
    const cc = "INSERT INTO Country (name) VALUES ('" + [req.params.name] +"')";
    con.query(cc, (err, result, fields) => {
    
    if (!err){
      res.send('Country INSERTED');
      res.end();
    }
      else
      console.log(err);
     })
  }
  
  
  // DELETE Country
  
  module.exports.CountDEL = (req,res)=>{
   
    con.query("DELETE FROM Country WHERE name = ?", [req.params.name],(err, result, fields) => {
    if (!err){
      res.send('Country DELETED');
      res.end();
    }
    else
      console.log(err);
  })
  }
  