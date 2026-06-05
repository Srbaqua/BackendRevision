const http  = require('http');
const server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("Helloo I am working");
})

server.listen(3000);