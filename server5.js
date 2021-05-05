//const http = require ('http');
//const fs = require ('fs');
const expr = require ("express"); // projeye expres ekleniyorum.
const yonveren = expr(); // express nesnesi olutrudum.
const router = require('./Routers/Route')
const path = require('path');
//const yoncon = require ("./yonmod")();
yonveren.use("/public", expr.static("dene"));
yonveren.use('/public', expr.static(path.join(__dirname, 'public')));

//const indexCon = (req, res) => { res.sendFile(path.join(__dirname, "index.html"));}
//const logCon = (req, res) => { res.sendFile(path.join(__dirname, "public/index2.html"));}

//yonveren.get ("/", indexCon);
//yonveren.get ("/bb", logCon);

yonveren.get ("/bb", router);

/*
    yonveren.get ("/", (req, res) => 
    { res.sendFile(path.join(__dirname, "index.html"));
             
    });
*/




yonveren.listen (10058);
