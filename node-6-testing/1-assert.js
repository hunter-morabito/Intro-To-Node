var assert = require("assert");
var fun = require('./mathfun');

// None of these tests are set to fail
assert.equal(fun.evenDoublerSynch(2),4);
assert.throws(function(){
   fun.evenDoublerSynch(3); 
}, /Odd/); // /Odd/ is a  regular expression of what is expected back

fun.evenDoubler(2,function(err, results){
    assert.ifError(err);
    assert.equal(results, 4, "evenDoubler failed on even number"); // extra message is the test fails
});

fun.evenDoubler(3, function(err, results){
    assert.notEqual(err, null); // asserting getting an error back
});