/* 
	SIMULACRO
*/


//TRaducción de palabra
function juego() {
	var otravez = "Queres seguir xogando?"
	var idioma = prompt("ingles ou galego?");

		if(idioma == "galego") {
				var palara1 = prompt("Cat en galego?");
					if(palara1 == "gato") {
						alert("BEN, tes 10 puntos!");
						resposta  = confirm(otravez);
					} else {
						alert("NON!"); 
					}
		} else if(idioma == "ingles") {
				var palabra2 = prompt("Gato en inglés?");
					if(palabra2 == "cat") {
							alert("BEN, tes 10 puntos!");
							resposta  = confirm(otravez);
					} else {
						alert("NON!"); }
		} else {
			alert("Bye! Volve cando queiras"); 
		}


	if (resposta == true) {
			var otravez = "Queres seguir xogando?";
			var idioma = prompt("ingles ou galego?");

				if(idioma == "galego") {
						var palara1 = prompt("Dog en galego?");
							if(palara1 == "can") {
								alert("BEN, tes 20 puntos!");
								resposta  = confirm(otravez);
							} else {
								alert("NON!"); 
							}
				} else if(idioma == "ingles") {
						var palabra2 = prompt("Can en inglés?");
							if(palabra2 == "dog") {
									alert("BEN, tes 20 puntos!");
									resposta  = confirm(otravez)
							} else {
								alert("NON!"); }
				} else {
					alert("Bye! Volve cando queiras"); 
				}
	} else { alert("Que pena");
		resposta = false;
	}


	if (resposta == true) {
			var otravez = "Queres seguir xogando?";
			var idioma = prompt("ingles ou galego?");

				if(idioma == "galego") {
						var palara1 = prompt("fish en galego?");
							if(palara1 == "pez") {
								alert("BEN, tes 30 puntos!");
								resposta  = confirm(otravez);
							} else {
								alert("NON!"); 
							}
				} else if(idioma == "ingles") {
						var palabra2 = prompt("pez en inglés?");
							if(palabra2 == "fish") {
									alert("BEN, tes 30 puntos!");
									resposta  = confirm(otravez)
							} else {
								alert("NON!"); }
				} else {
					alert("ERROR, escribe ben o idioma"); 
				}
	} else { alert("Que pena");
	resposta = false;
	}


	if (resposta == true) {
			var otravez = "Queres seguir xogando?";
			var idioma = prompt("ingles ou galego?");

				if(idioma == "galego") {
						var palara1 = prompt("bear en galego?");
							if(palara1 == "oso") {
								alert("BEN, tes 40 puntos!");
								resposta  = confirm(otravez);
							} else {
								alert("NON!"); 
							}
				} else if(idioma == "ingles") {
						var palabra2 = prompt("oso en inglés?");
							if(palabra2 == "bear") {
									alert("BEN, tes 40 puntos!");
									resposta  = confirm(otravez)
							} else {
								alert("NON!"); }
				} else {
					alert("ERROR, escribe ben o idioma"); 
				}
	} else { alert("Que pena");
	resposta = false;
	}


	if (resposta == true) {
			var otravez = "Queres seguir xogando?";
			var idioma = prompt("ingles ou galego?");

				if(idioma == "galego") {
						var palara1 = prompt("pig en galego?");
							if(palara1 == "porco") {
								alert("Feliciades conseguiches os 50 puntos!");
								
							} else {
								alert("NON!"); 
							}
				} else if(idioma == "ingles") {
						var palabra2 = prompt("porco en inglés?");
							if(palabra2 == "pig") {
									alert("Feliciades conseguiches os 50 puntos!");
									
							} else {
								alert("NON!"); }
				} else {
					alert("ERROR, escribe ben o idioma"); 
				}
	} else { alert("Que pena");
	resposta = false;
	}



}




function ayuda() {

	alert("Para comezar a xogar pulsa o outro botón. Terás que escribir o idioma co que queiras responder. Unha vez escollido deberás escribir a plabra que te indica no idioma escollido. Todas as respostas en minúsculas e sen tildes")
}