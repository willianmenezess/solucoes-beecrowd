var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let media = ((2*a) + (b*3) + (c*5))/10;

console.log ("MEDIA = " + media.toFixed(1));
