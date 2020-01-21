/* 
calculadorita
*/

/*document.write("<h1>CALCULADORA</h1>");
var operacion = prompt("Que operacion queres? + - x");
//var operacion = parseInt(operacion);

var valor1= prompt("primer valor?");
var valor1 = parseFloat(valor1);

var valor2 = prompt("segundo valor?");
var valor2 = parseFloat(valor2); */

document.write('<h3>  </h3>');
for (var i=1; i<=3 ; i++) {
	document.write("<h1>Operación:</h1>");
	var operacion = prompt("Que operacion queres? + - x");
//var operacion = parseInt(operacion);

var valor1= prompt("primer valor?");
var valor1 = parseFloat(valor1);

var valor2 = prompt("segundo valor?");
var valor2 = parseFloat(valor2);


if(operacion == "+") {
	document.write(valor1+valor2);
} else if(operacion == "-") {
	document.write(valor1-valor2);
} else if(operacion == "x") {
	document.write(valor1*valor2);
} else {
	document.write("ERROR"); 
}
}