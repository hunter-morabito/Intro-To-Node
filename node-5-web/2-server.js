var fs = require('fs');

var http = require("http");

// create the server
http.createServer(function(req, res){
    // write the head
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // if the request is  file.txt, then read that stream
    if(req.url === '/file.txt'){
        fs.createReadStream(__dirname + '/file.txt').pipe(res);
    }else{
        res.end('Hello World');
    }
}).listen(process.env.PORT, process.env.IP);

console.log('Server Running');