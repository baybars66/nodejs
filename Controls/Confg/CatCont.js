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

// GET CATEGORIES ALL
 
module.exports.CatALL = (req,res)=>{
    con.query("SELECT name FROM Category",  (err, result, fields) => {
    if (!err){
      res.send(result);
     res.end();
    }
      else
      console.log(err);
    })
  }
  
  
  // ADD CATEGORY
  
  module.exports.CatADD = (req,res)=>{
    const cc = "INSERT INTO Category (name) VALUES ('" + [req.params.name] +"')";
    con.query(cc, (err, result, fields) => {
   
    if (!err)
    {
      res.send('CATEGORY INSERTED');
      res.end();
    } 
    else
      console.log(err);
     })
  }
  
  
  // DELETE CATEGORY
  
  module.exports.CatDEL = (req,res)=>{
   
    con.query("DELETE FROM Category WHERE name = ?", [req.params.name],(err, result, fields) => {
    if (!err){
      res.send('CATEGORY DELETED');
      res.end();
    }
      else
      console.log(err);
  })
  }
  