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


module.exports.Kisiler = (req,res)=>{
    console.log("geldi");
   
    con.query("SELECT name FROM users",  (err, result, fields) => {
    if (!err){
        res.send(result);
        res.end();
    }
    else
        console.log(err);
      })
  }



// GET SPESİFİC USER

module.exports.GetOne = (req,res)=>{
    console.log([req.params.isim]);
    con.query("SELECT * FROM users WHERE name = ?", [req.params.isim], (err, result, fields) => {
  
         if (!err){
          
            //console.log(result);
            //console.log(result[0].id);
           res.send(result);
           res.end();

         }
             else
             console.log(err);
     })
  }
  
  
  //ADD USER
  
  module.exports.KisilerADD = (req,res)=>{
     // console.log('ADD kişiler',req.body);
    const user = req.body;
    const dd = "INSERT INTO users (name, pass) VALUES ('" + user.name + "', '" + user.pass +"')";
    con.query(dd, (err, result, fields) => {
    if (!err){
    console.log('hhh');
     res.send('USER INSERTED');
    
     res.end();
    }
    else
     console.log(err);
     })
  }
  
  
  // DELETE USER
  
  module.exports.KisilerDEL = (req,res)=>{
    con.query("DELETE FROM users WHERE name = ?", [req.params.id], (err, result, fields) => {
    if (!err){
      res.send('USER DELETED');
      res.end();

    }
    else
      console.log(err);
    })
  }
  
  