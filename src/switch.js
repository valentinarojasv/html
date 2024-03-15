document.querySelector('#header').innerHTML = "Estoy leyendo el documento switch"
var semana
var mensaje
var userInput = prompt ("ingrese el numero del dia")

function dia_lunes() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="purple";
}
function dia_martes() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="black";
}
function dia_miercoles() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="orange";
}
function dia_jueves() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="yellow";
 }
 function dia_viernes() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="green";
}
function dia_sabado() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="red";
} 
function dia_domingo() {
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="pink";
}
function dia_invalido() {
    mensaje = "Dia invalido";
    document.querySelector('#header').innerHTML = mensaje
    document.querySelector('#header').style.color ="blue";
  }

semana = parseInt(userInput)// con paserInt se convierte a entero

switch(semana){
    case 1:
        mensaje= "Lunes";
        dia_lunes()
    break
    case 2:
        mensaje= "Martes";
        dia_martes()
    break
    case 3:
        mensaje= "Miercoles";
        dia_miercoles()
    break
    case 4:
        mensaje = "Jueves";
        dia_jueves()
    break
    case 5:
        mensaje= "Viernes";
        dia_viernes()
    break 
    case 6:
        mensaje= "Sabado";
        dia_sabado()
    break
    case 7:
        mensaje= "Domingo";
        dia_domingo()
    break
    default:
        dia_invalido()   
}
