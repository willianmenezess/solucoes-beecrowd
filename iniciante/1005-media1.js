var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

let media = ((3.5*a) + (b*7.5))/11;

console.log ("MEDIA = " + media.toFixed(5));
