var http = require("http");

var options = {
    host:'www.google.com',
    port: 80,
    path: '/',
    method:'GET'
};

console.log("Going to make request...");

/*var req = http.request('http://www.google.com/', function(response){
    // get the status code (i.e. 04, 200)
    console.log(response.statusCode);
    response.pipe(process.stdout);
});*/

// using the options object
var req = http.request(options, function(response){
    // get the status code (i.e. 04, 200)
    console.log(response.statusCode);
    response.pipe(process.stdout);
});

req.end();