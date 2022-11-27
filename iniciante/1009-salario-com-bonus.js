var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nameEmployee = lines.shift();
let salaryFixed = parseFloat(lines.shift());
let sales = parseFloat(lines.shift());

let salaryTotal = salaryFixed + 0.15*sales;

console.log("TOTAL = R$ " + salaryTotal.toFixed(2));