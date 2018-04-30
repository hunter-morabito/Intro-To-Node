var util = require("util");
var EventEmitter = require("events").EventEmitter;

function Resource (m){
    var self = this;
    var maxEvents = m;
    process.nextTick(function(){
        var count = 0; 
        self.emit('start');
        var t = setInterval(function(){
            self.emit('data', ++count);
            if (count === maxEvents){
                self.emit('end', count);
                clearInterval(t);
            }
        }, 10);
    });
} 

// Sets inheritence of the EventEmitter
util.inherits(Resource, EventEmitter);

module.exports = Resource;