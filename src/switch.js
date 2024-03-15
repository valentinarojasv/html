document.querySelector('#header').innerHTML = "Estoy leyendo el documento switch"
var fruta
var mensaje
var userInput = prompt ("ingrese el numero de la fruta")

function jugo_de_fresas() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="red";
}

function jugo_de_naranja() {
    mensaje = "Batir naranjas y mandarinas";
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="orange";

}

function servir_vaso_de_agua() {
    mensaje = "Servir vaso con agua";
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="blue";
  }

fruta = parseInt(userInput)// con paserInt se convierte a entero

switch(fruta){
    case 1:
        mensaje= "Batir fresas"
        jugo_de_fresas()
    break
    case 2:
    case 3:
        jugo_de_naranja()
    break
    default:
        servir_vaso_de_agua()
    break    
}
