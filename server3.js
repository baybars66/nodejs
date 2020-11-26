
const http = require ('http');
const fs = require ('fs');
var yon = ''; // var sız da oluyo const ile çalışmıyor.

const server = http.createServer ( (istk, cvp)=> {
    //const baba = req.url;
    console.log (istk.url);
  /*
   if (istk.url == '/') yon = 'index.html';
   if (istk.url == '/log') yon = 'index2.html';
*/
if (istk.url == '/') yon = 'login.html';
if (istk.url == '/log') yon = 'index2.html';

  fs.readFile(yon, (err, data) => {
      cvp.write (data);
      cvp.end ();
  });


});

   
server.listen (266);
