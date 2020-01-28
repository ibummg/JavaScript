

var producto1 = prompt("Precio del primer producto");
producto1 = parseFloat(producto1);
document.write("1er producto " + producto1 + "€" + "<br/>");

var producto2 = prompt("Precio do segundo producto");
producto2 = parseFloat(producto2);
document.write("2o producto " + producto2 + "€" + "<br/>");

var producto3 = prompt("Precio do terceiro producto");
producto3 = parseFloat(producto3);
document.write("3er producto " + producto3 + "€" + "<br/>");

var total = (producto1 + producto2 + producto3).toFixed(2);
document.write("O total son: " + total + "€");
alert("Son: " + total + "€");

