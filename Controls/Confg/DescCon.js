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

// GET DESCRIPTION ALL

module.exports.DescALL = (req,res)=>{
    con.query("SELECT name FROM Description",  (err, result, fields) => {
     if (!err){
      res.send(result);
      res.end();
     }
      else
      console.log(err);
    })
  }
  
  
  // ADD DESCRIPTION
  
  module.exports.DescADD = (req,res)=>{
    console.log('gedi');
    const bb = "INSERT INTO Description (name) VALUES ('" + [req.params.name] +"')";
    con.query(bb, (err, result, fields) => {
    //con.query("INSERT INTO Description (name) VALUES ('dede')", (err, result, fields) => {
    if (!err){
      res.send('DESCRIPTION INSERTED');
      res.end();
    }
    else
      console.log(err);
     })
  }
  
  
  // DELETE DESCRIPTION
  
  module.exports.DescDEL = (req,res)=>{
    con.query("DELETE FROM Description WHERE name = ?", [req.params.name],(err, result, fields) => {
    if (!err){
      res.send('DESCRIPTION DELETED');
      res.end();
    }
    else
      console.log(err);
  })
  }
  
  