var express = require('express');
var app = express();
let EventLogger = require('node-windows').EventLogger;

log = new EventLogger('Hello World'); // Имя источника в журнале событий Windows

// log.info('Basic information.');
// log.warn('Watch out!');
// log.error('Something went wrong.');

// var fs = require('fs');
// var util = require('util');
// var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'a'});
// var log_stdout = process.stdout;

var fs = require('fs');
var util = require('util');
var logFile = fs.createWriteStream('debug.log', { flags: 'a' });
  // Or 'w' to truncate the file every time the process starts.
var logStdout = process.stdout;

overrideConsoleMethod = function () {
  logFile.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.warn = overrideConsoleMethod;
console.error = overrideConsoleMethod;
console.info = overrideConsoleMethod;
//
//
// console.log = function(d) { //
//   log_file.write(util.format(d) + '\n');
//   log_stdout.write(util.format(d) + '\n');
// };

app.get('/', function(req, res) {
    // log.info('INFO 0002');
    // log.warn('WARN 0003');
    // log.error('ERROR 0004');
    console.log('LOG 023023023');
    console.error('ERROR 333444-00');
    res.send('Hello World!');

});

app.listen(3000, function() {
 console.info('INFO BLEATb');
    console.log('Example app listening on port 3000!');
});
