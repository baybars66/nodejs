const path = require('path');


module.exports.indexCon = (req, res) => { res.sendFile(path.join(__dirname, "index.html"));}
module.exports.logCon = (req, res) => { res.sendFile(path.join(__dirname, "index2.html"));}

