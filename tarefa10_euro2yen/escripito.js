/* 
tarefa10 EURO A YEN
*/

function e2y(x){
	return(x*121.52);
}

function y2e(x){
	return(x/121.52);
}


var compra = "Compraches algo máis?"
var resposta;
resposta = true;
while (resposta == true) {
	var compra = "Compraches algo máis?"
	var resposta;
	resposta = true;
	var producto = prompt("Que compraches?");
	document.write(producto + ": ");
	var moneda = prompt("Euros ou Yenes?");
	var precio = prompt("Canto costou?");
	var precio = parseFloat(precio);

	if(moneda == "euros") {
		document.write(precio + " € ->" + e2y(precio).toFixed(2) + " ￥  <br/>" );
	} else if(moneda == "yenes") {
		document.write(y2e(precio).toFixed(2)  + " € ->" + precio + " ￥  <br/>");
	} else {
		document.write("ERROR"); 
	}

	resposta  = confirm(compra);
}



//Preguntas + if
/*var compra = "Compraches algo/ algo máis?"
var respostad
resposta = true;
var producto = prompt("Que compraches?");
document.write(producto);
var moneda = prompt("Euros ou Yenes?");
var precio = prompt("Cancho costou?");
var precio = parseFloat(precio);

if(moneda == "euros") {
	document.write(precio + " € " + e2y(precio) + " Y ");
} else if(moneda == "yenes") {
	document.write(precio + " Y " + y2e(precio) + " € ");
} else {
	document.write("ERROR"); 
}*/



//conversor

/*var resposta = prompt("Cantas ducias leva unha tortilla? ");
var ducias = parseInt(resposta);
alert("Dixeches: " + resposta);
 
var ovos = resposta*12;
alert("Enton són: " + ovos);
*/