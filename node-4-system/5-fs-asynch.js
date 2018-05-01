var fs = require('fs');

if (fs.exists('temp')){
    console.log('Directory exists, removing...');
    if(fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt');
    }
    fs.rmdir('temp');
}

// Asynch Asynch... Bad.
fs.mkdir('temp', function(err){
    fs.exists('temp'), function(exists){
        if(exists){
            process.chdir('temp');
            fs.writeFile('test.txt', 'this is s ome text', function(err){
                fs.rename('test.txt', 'new.txt', function(err){
                    fs.stat('new.txt', function(err, stats){
                        console.log('File has size: ' + stats.size + ' bytes');
                        fs.readFile('new.txt', function(err, data){
                            console.log('File contents: ' + data.toString());
                        });
                    });
                });
            });
        }
    };
});