/* 
	Código en JavaScript
	Nome do ficheiro: escripito.js
	Usado: 
*/


//Código 2 (y 1)
/*function presentar(){
	var resposta  = prompt("Como te chamas?");
	document.write("Sei que te chamas " + resposta)
}
function ducias2ovos(duc){
	alert( duc * 1000);
} 

function sumita (a,b) {
	alert (a+b);
}

document.write('<button onclick="sumita(3,5);" >  Canto son 3+5 ?  </button>');
document.write('<button onclick="ducias2ovos(5);" >  cantos ovos son 10 ducias? </button>');
document.write('<button onclick="presentar();" >  Podo cotillear?  </button>');*/




//Concatenar 
/*function sumita () {
	var a = prompt("Primero?");
	var b = prompt("Segundo?")
	alert (a+b);
}
document.write('<button onclick="sumita();" >  Canto son?  </button>');
*/


//Código 3
	


function saudar() {

	var nn = document.getElementById("nomecito").value;
	var ap = document.getElementById("apelidazo").v
	var ed = document.getElementById("años").value;

	document.getElementById("nomecito").style.borderColor = "#FF00FF";
	document.getElementById("nomecito").style.backgroundColor = "aqua";
	document.getElementById("apelidazo").style.borderColor = "#FF00FF";
	document.getElementById("apelidazo").style.backgroundColor = "aqua";
	document.getElementById("años").style.borderColor = "#FF00FF";
	document.getElementById("años").style.backgroundColor = "aqua";
	
	document.getElementById("parrafada").innerHTML = "Benvido "+ ap + ", " + nn + ". Tes: " + ed + " anos.";
	document.getElementById("parrafada").style.color = "magenta";
	document.getElementById("parrafada").style.fontSize = "18pt";
	document.getElementById("parrafada").style.textDecoration = "underline";
	document.getElementById("parrafada").style.textShadow = "2px 1px black";

}
