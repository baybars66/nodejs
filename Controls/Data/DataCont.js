
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


//GET DATA

//await axios.get('http://localhost:5006/Data/:' + e.target.value);

module.exports.DataALL = (req,res)=>{
  
    const ulke = req.body.ulke;
    const estimated= req.body.estimate;
    //console.log(ulke, estimated);
  
   const sql = "SELECT * FROM Tum WHERE Name = '" + ulke+ "' AND Estimated = "+ "'"+estimated+"'";
  //console.log(sql);
   //const sql ='SELECT * FROM Balkan WHERE Estimated = "YES"' ;
  
  
    con.query(sql, (err, result, fields) => {
  
         if (!err){
           //console.log('Deneme: ');
           // console.log(result);
            //console.log(result[0].id);
           res.send(result);
           res.end();
         }
             else
             console.log(err);
     })
   }
  
  //ADD DATA
  
  module.exports.DataADD = (req,res)=>{
    const all = req.body;
    const ulke = all.ulke;
    const amount = all.adet*all.fiyat;
  
    //console.log(all);
    const sql = "INSERT INTO Tum (Name, User, Depart, Donus, Descrip, Category, Quantity, Price, Estimated, Amount) VALUES ('" +all.ulke + "', '" + all.kullanici + "', '" + all.gidis + "', '" +all.donus + "', '" + all.icerik + "', '" + all.kategory + "', '" + all.adet + "', '" + all.fiyat + "', '" + all.tahmini + "', '" + amount + "')";
  
  //const sql = "INSERT INTO " + ulke + " (User, Donus) VALUES ('" + all.kullanici + "', '" + all.donus +  "')";
  
  
  // console.log(sql);
  // console.log(amount);
  
  
  
    //   const dd = "INSERT INTO users (name, pass) VALUES ('" + user.name + "', '" + user.pass +"')";
  
  
    con.query(sql, (err, result, fields) => {
    if (!err) {
     res.send('DATA INSERTED');
     res.end();
    }
    else
     console.log(err);
  
     })
  }
  
  //DELETE DATA
  
  
  
  module.exports.DataDEL =  (req,res)=>{
  
    console.log("Data Del deyim***************");
    const ulke = req.body.ulke;
    const id = req.body.id;
    console.log(id);
    
  //const sql = "DELETE FROM Tum WHERE id =" + "'" + id+ "'";
  const sql = "DELETE FROM Tum WHERE id = '" + id+ "'";
 // console.log(sql);
  
  
    con.query(sql, (err, result, fields) => {
    if (!err){
      res.send('DATA DELETED');
      res.end();
    }
    else
      console.log(err);
  })
   }
  