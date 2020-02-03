/* 
	CALCULADORA TAREFA 12
*/
//Código 3

function saudar() {
	var valor1 = document.getElementById("primero").value;
	var valor1 = parseFloat(valor1);
	var operacion = document.getElementById("signo").value;
	var valor2 = document.getElementById("segundo").value;
	var valor2 = parseFloat(valor2);

if(operacion == "+") {
	document.getElementById("parrafada").innerHTML = valor1 + valor2;
} else if(operacion == "-") {
	document.getElementById("parrafada").innerHTML = valor1 - valor2;
} else if(operacion == "x") {
	document.getElementById("parrafada").innerHTML = valor1 * valor2;
} else {
	document.write("ERROR"); 
}

}


