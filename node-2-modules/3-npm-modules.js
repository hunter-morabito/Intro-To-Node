var  request = require('request');

// first is url
// response object
// body is the text of the response
request('http://www.pluralsight.com/', function(error,response, body){
    if (!error && response.statusCode === 200){
        console.log(body);
        // console.dir(response)
    }
});