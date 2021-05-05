const mysql = require('mysql');
const con= require ('../Functions/Connection');
// const con = mysql.createConnection({
    const path = require('path');

//     //host: "192.168.1.33",
//     //host: "localhost",
//     host: "88.250.131.163",
//     user: "bay66",
//     password: "super66",
//     database: "Mrts2020",
//     connect_timeout:1000,
   
   
//    });


module.exports.PindexCon = (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));

}

module.exports.loginCon = (req,res) => {
    res.sendFile(path.join(__dirname, '../public/Login.html'));

}

module.exports.deneCon = (req,res) => {
    res.sendFile(path.join(__dirname, '../index.html'));

}


module.exports.getKisiler = (req,res)=>{
    console.log("geldi");
   
    con.query("SELECT name FROM users",  (err, result, fields) => {
    if (!err)
        res.send(result);
    else
        console.log(err);
      })
  }
  