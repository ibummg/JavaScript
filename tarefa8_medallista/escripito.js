/* 
Tarefa 8
*/

function puesto(posicion) {
		if(posicion == 1) {
		alert("Medalla de ouro");
	} else if(posicion == 2) {
		alert("Medalla de plata");
	} else if(posicion == 3) {
		alert("Medalla de bronce");
	} else {
		alert("Pringao "); 
	}
}

var resposta = prompt("A tua posicion?");
var numResp = parseFloat(resposta);

puesto(numResp);




