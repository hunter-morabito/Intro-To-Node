var request = require('request');

var s = request('http://www.pluralsight.com/');

// Subscribed to these events
// data() event
s.on('data', function(chunk){
   console.log(">>>Data>>> " + chunk); 
});

// end() event
s.on('end', function(){
   console.log(">>>Done!>>>"); 
});
