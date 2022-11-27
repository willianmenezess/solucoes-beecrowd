var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


let idEmployee = lines.shift();
let workedHours = parseInt(lines.shift());
let valueHour = parseFloat(lines.shift());


let wageEnployee = workedHours * valueHour;

console.log("NUMBER = " + idEmployee + "\n" + "SALARY = U$ " + wageEnployee.toFixed(2));