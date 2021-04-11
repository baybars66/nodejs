
const mysql = require('mysql');
const con= require ('../Functions/Connection');
var Promise = require("bluebird");


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

module.exports.Basla =  async (req,res)=>{
    console.log("basladayım");
    const gidecek = {
        kisiler : [
            {
              name : "",
             
            }
          ],
  
  
          country : [{
              
              name:""
          }],
  
          cat : [{
            
              name:""
          }],
  
          desc : [{
             
              name:""
          }]
    }

  
    var rowq1="";
    var rowq2="";
   // var ulke = req.body.name;
    //console.log(ulke);
 const q1="SELECT name FROM users";
 const q2 ="SELECT name FROM Country";
 const q3 ="SELECT name FROM Category";
 const q4 ="SELECT name FROM Description";

   await db.queryAsync(q1).then(function(rows){
        
        // var string=JSON.stringify(rows);
        // rowq1 =  JSON.parse(string);
       rowq1=rows;
       // console.log(rows);
       // console.log("Local veri", rowq1);
    });
    await db.queryAsync(q2).then(function(rows){
       // console.log(rows);
        rowq2 =rows;
        
    });

    await db.queryAsync(q3).then(function(rows){
       // console.log(rows);
        rowq3 =rows;
       
    });

    await db.queryAsync(q4).then(function(rows){
        // console.log(rows);
         rowq4 =rows;
        
     });

    //console.log("Global All", veri,ali);
  //console.log(rowq1);
    gidecek.kisiler=rowq1;
    gidecek.country=rowq2;
    gidecek.cat=rowq3;
    gidecek.desc=rowq4;
   // console.log(gidecek);
    res.send(gidecek);
    res.end();

    
}