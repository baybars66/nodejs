const http = require ('http');
const fs = require ('fs');
const expr = require ("express"); // projeye expres ekleniyorum.
const yonveren = expr(); // express nesnesi olutrudum.

var path = require('path');

yonveren.use('/public', expr.static(path.join(__dirname, 'public')));

//yonveren.use("/public", expr.static("dene"));
yonveren.get ("/", (req, cvp) => 
    { fs.readFile("index.html", (err, data) => 
           {
             cvp.write (data);
              cvp.end ();
            });

    });

yonveren.get ("/log", (req, cvp) => 
    { fs.readFile("index2.html", (err, data) =>
         {
           
            cvp.write (data);
            cvp.end ();
        });

    });

    yonveren.listen (66);
