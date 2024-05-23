document.querySelector('#header').innerHTML = "Estoy leyendo el documento Proyecto Arreglo.js"

// Definimos el arreglo vacio
let arreglo = []

function construirArreglo() {
    arreglo.length = largo
}

function llenarArreglo() {
    for (let i = 0; i < arreglo.length; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
    }
    console.log(arreglo)
}

function PromedioArreglo() {
let sumaTotal = 0;
for(let i = 0; i <arreglo.length; i++){
    sumaTotal = sumaTotal + arreglo[i];
}
return sumaTotal / arreglo.length
}

function MayoresPromedio() {
let promedio = PromedioArreglo();
let cantidadDeElementos = 0;

for(let i = 0; 1< arreglo.length; i++){
    if(arreglo[i] > promedio){
        cantidadDeElementos++;
    }
}
  return cantidadDeElementos;
}

function SumarValor(aumentaArreglo){
    arreglo.length = arreglo.length + aumentaArreglo
}

function sumaImpares(){
    let totalImpares = 0

    for(let i = 0; i < arreglo.length; i++){

        if((arreglo[i] % 2) != 0) {
        totalImpares = totalImpares + arreglo[i]
    }
}
return totalImpares
}

// seguir


var largo = parseInt(prompt("Digite el largo del arreglo"))
construirArreglo(largo);
llenarArreglo();

do {
    var opcion = prompt("1. Llenar arreglo \n2. Promedio del arreglo \n3. Contar elementos mayores al promedio \n4. Sumar un valor al arreglo \n5. Sumar los elementos impares del arreglo \n6. Encontrar el mayor elemento del arreglo \n7. Encontrar la mayor diferencia entre elementos consecutivos \n8. Encontrar un elemento en el arreglo  \n9. Encontrar la posición de un elemento en el arreglo \n10.  Invertir el arreglo \n11. Insertar un elemento en una posición del arreglo \n12. Ver arreglo \n13. salir")
    switch (parseInt(opcion)) {
        case 1:
            llenarArreglo()
            break
        case 2:
            PromedioArreglo()
            break
        case 3:
            MayoresPromedios()
            break
        case 4:
            SumarValor()
            break
        case 5:
            SumaImpares()
            break
        case 6:
            EncontrarMayorElemento()
        break
        case 7:
        

    }
} while (finalizar == true)