document.querySelector('#header').innerHTML = "Estoy leyendo el documento dowhile.js"



function suma() {
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1) + parseInt(numero2))
}

function resta() {
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1) - parseInt(numero2))
}

function multiplicacion() {
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1) * parseInt(numero2))
}

function division() {
    var numero1 = prompt("ingrese numero 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1) / parseInt(numero2))
}

var i = 0
do {
    i++
    console.log(i)

    var respuesta = prompt("1. Suma\n2. Resta\n3. Multipicacion\n4. Division\n 5. Finalizar")


    switch (parseInt(respuesta)) {
        case 1:
            suma()
            break
        case 2:
            resta()
            break
        case 3:
            multiplicacion()
            break
        case 4:
            division()
            break
        case 5:
            var i = 5
    }
} while (i < 5)