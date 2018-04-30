var Resource = require('./resource-2');

// importing and setting a new EventEmitter
var r = new Resource(7);

r.on('start', function(){
    console.log("I've started!");
});

r.on('data', function(d){
    console.log("I recieved data -> "+ d);
});

r.on('end', function(t){
    console.log("I'm done with " + t + " data events.");
});