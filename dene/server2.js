const http = require ('http');
const fs = require ('fs');
const yon='';


const server = http.createServer ( (req, res)=> {
  


    fs.readFile(url, (err, data) => {
         res.write (data);
         res.end ();
    });


});
   



   



server.listen (66);
