const http = require ('http');
const expr = require ("express"); // projeye expres ekleniyorum.
const yonveren = expr(); // express nesnesi olutrudum.
const yoncon = require ("./yonmod");
const path = require('path');
yonveren.use('/public', expr.static(path.join(__dirname, 'public')));

yonveren.get ("/", yoncon.indexCon);
yonveren.get ("/log", yoncon.logCon);


yonveren.listen (66);
