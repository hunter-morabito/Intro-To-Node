var fs = require("fs");

if (fs.exists('temp')){
    console.log('Directory exists, removing...');
    if(fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdir('temp');
}

fs.mkdir('temp');
if (fs.existsSync('temp')){
    process.chdir('temp');
    fs.writeFileSync('test.txt', 'This is some data text');
    fs.renameSync('test.txt', 'new.txt');
    console.log('File has size: ' + fs.statSync('new.txt').size + ' bytes');
    console.log('File contents: ' + fs.readFileSync('new.txt').toString());
}