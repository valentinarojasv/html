document.querySelector('#header').innerHTML = "Estoy leyendo el documento while.js"
var mensaje

frutas = ["Fresa","Manzana","Naranja","Mango","Pera","Cereza"]

var i = 0
while(i < 6){

    console.log(i + "." + frutas[i])
    i = i + 1
}
