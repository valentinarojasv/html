document.querySelector('#header').innerHTML = "Estoy leyendo el documento Cesta.js"

var cesta = []

function ver_cesta() {
    alert(cesta)
}

function agregar_fruta() {
    var fruta1 = prompt("ingrese una fruta")
    cesta.push(fruta1)
}

function quitar_fruta() {
    cesta.pop()
}

function eliminar_fruta_especifica(){
    var fruta1 = prompt("ingrese la fruta que desea eliminar")
    cesta.splice(x,1)
}

do{
    var x = 0
    x++
        console.log(x)
    } 
    
while (x < cesta.length)
do {
    
    var opcion = prompt("1. Ver elementos de la cesta\n2. Agregar una fruta a la cesta\n3. Quitar una fruta de la cesta\n4. Eliminar una fruta especifica\n5. Finalizar")
    switch (parseInt(opcion)) {

        case 1:
            ver_cesta()
            break;
        case 2:
            agregar_fruta()
            break;
        case 3:
            quitar_fruta()
            break;
        case 4:
            eliminar_fruta_especifica()
            break;
        case 5:
            finalizar = false
            break;
    }
} while (finalizar == true)