var b = new Buffer('Hello');

console.log(b.toString());

// print the encoded version
console.log(b.toString('base64'));

// quicker way to convert 'World' to a base64
var v = new Buffer('World').toString('base64');

// the 0 and 2 just take the 'He' from the string
console.log(b.toString('utf-8', 0,2));