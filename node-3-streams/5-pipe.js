// request module
var request = require("request");
// used in second function (fs is for file system)
var fs = require("fs");
// used in third example for a readable and writable stream
var zlib = require("zlib");

// request on ps homepage and store the stream on var s
var s = request('http://pluralsight.com/');
  
// Example 1
// instead of listening for events on the readable stream call pipe() and
// pipe it to writable stream
//s.pipe(process.stdout);

// Example 2
// pipe the readable stream to a filestream
// createWriteStream returns a stream
// "Download a webpage and write it to a file in one line"
//s.pipe(fs.createWriteStream('pluralsight.html'));

// Example 3
// GZip returns a r/w stream that reads uncompressed content and outputs compressed content
s.pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'));