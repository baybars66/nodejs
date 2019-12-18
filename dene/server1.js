const http = require ('http');

const server = http.createServer ( (re, res)=> {
 res.write ('selam');
 res.end ('baba');
}

);

server.listen (66);
