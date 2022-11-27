var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// let ask1 = lines.shift();
// let ask12= lines.shift();

let piece1 = lines.shift().split(" ");
let piece2 = lines.shift().split(" ");



let valueTotal = (piece1[1]*piece1[2]) + (piece2[1]*piece2[2]);

console.log("VALOR A PAGAR: R$ " + valueTotal.toFixed(2));