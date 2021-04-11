
const mysql = require('mysql');
var Promise = require("bluebird");
const { response } = require('express');
const con= require ('../Functions/Connection');

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



module.exports.Gen =  async (req,res)=>{

  

var gelen={
    name:"",
    value:""
    };
var Gidecek ={
    EstSum:[],
    RealSum:[]

}

const Quarter=[' AND Depart > "2021-01-01" AND Depart < "2021-03-31"',
               ' AND Depart > "2021-04-01" AND Depart < "2021-06-31"',
               ' AND Depart > "2021-07-01" AND Depart < "2021-09-31"', 
               ' AND Depart > "2021-10-01" AND Depart < "2021-12-31"',
            ];

Sorgula= async(mm)=>{
   var bb="";
    i=1;
    j=1;
    var isim="";

    sql ='SELECT SUM(Amount) AS "Sum" FROM Tum WHERE Estimated= "YES"' + mm;

        await db.queryAsync(sql).then(function(rows){
            gelen=rows[0].Sum;
         // gelen.value=rows[0].Sum;
          // gelen.name="Q"[i];
          // i=i+1;
          isim="Q"+i;
          i=i+1;
 
          bb= {name:isim, value: gelen};
        });
       
        Gidecek.EstSum.push(bb);


    
    sql ='SELECT SUM(Amount) AS "Sum" FROM Tum WHERE Estimated= "NO"' + mm;

        await db.queryAsync(sql).then(function(rows){
         

            gelen=rows[0].Sum;
            //console.log(Gidecek);
            isim="Q"+j;
            j=j+1;
   
            bb= {name:isim, value: gelen};
    });



    Gidecek.RealSum.push(bb);
    if(Gidecek.RealSum[3]!= null) {
        res.send(Gidecek);
        res.end();

    }
    
}

Quarter.forEach ((mm)=>{
      Sorgula(mm);
     
});



}


// bilgi1.forEach(bb=>{
//     var i=1;
//  data01={"name":"Q"[i], "value":bb};
//   console.log(data01);
//   i=i+1;
// });

