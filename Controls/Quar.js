
const mysql = require('mysql');
var Promise = require("bluebird");
const con= require ('../Functions/Connection');
const QuarterSum = require('../Functions/QuarterSum')
const QuarterTotalSum = require ('../Functions/QuarTotalSum')
const QuaDetList = require ('../Functions/QuaDetList')

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



module.exports.QTOTAL =  async (req,res)=>{
  var donem = req.body.peri;
 // console.log(donem);
  
  await QuarterTotalSum.GenelToplam(donem).then((resp) =>{
    //dd=resp;
    //console.log(dd);
    res.send(resp);
    res.end();
    });
  
  }
  


module.exports.Qua1 =  async (req,res)=>{
   
  donem=req.body.peri;
  var Est= req.body.Est;
 // console.log(Est);
  var CatList=[];
  var cc = []; 
  var dd="";
  var say =1;
//console.log(donem);
  const Cat="SELECT Name FROM Category"
   await db.queryAsync(Cat).then(function(rows){
    rows.map( adam =>{
    CatList.push(adam.Name);
    });
  });


    var ali = async(bb) =>{
      await QuarterSum.QuaALL(donem, bb, Est).then((resp) =>{
      dd=resp;
      });
  
      cc.push(dd);
      if(say===CatList.length) {
          res.send(cc);
          res.end();
      } 
       else {
        say =say +1 ;
      }
  
    }
  
    CatList.forEach( item =>{
       var geldi =ali(item);
  
    });


}



module.exports.QDETLIST = async (req,res)=>{


  var donem = req.body.peri;
  var est = req.body.Est;
  //console.log("body", req.body);
  var DescList=[];
  var cc = []; 
  var dd="";
  var say =1;
//console.log(donem);
  const Desc="SELECT Name FROM Description"
   await db.queryAsync(Desc).then(function(rows){
    rows.map( adam =>{
    DescList.push(adam.Name);
    
    });
  });
  //console.log(DescList);

  var veli = async(Desc) =>{
    await QuaDetList.Listele(donem,Desc, est).then((resp) =>{
      if (resp.Descrip===null) return;
      else {
    dd=resp;
    cc.push(dd);
    }
    });

    
    if(say===DescList.length) {
        res.send(cc);
        res.end();
    } 
     else {
      say =say +1 ;
    }

  }
//*****************************Dikkat Veli fonkisyonun altında olacak yer değiştirme */
  DescList.forEach( item =>{
     var geldi =veli(item);

  });



  
}