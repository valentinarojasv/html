document.querySelector('#header').innerHTML = "Estoy leyendo el documento Proyecto"

var largo = parseInt(prompt("Digite la cantidad de los elementos del arreglo"));

let finalizar = false;

function construir(largo){
    arreglo.length = largo
}

function llenar(){

    let numeroAleatorio;
    for(let i = 0; i < arreglo.length; i++){
        numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
        
    }
    console.log(arreglo)
  
}

function promedioArreglo(){
let sumaTotal = 0;
for(let i = 0; i < arreglo.length; i++){
        sumaTotal = sumaTotal + arreglo[i];
}
return sumaTotal / arreglo.length
}


function mayoresPromedio(){
    let promedio = promedioArreglo();
    let cantidadDeElementos = 0;

    for(let i = 0; i < arreglo.length; i++){   
        if(arreglo[i] > promedio){
            cantidadDeElementos++;
        }
    }
    return cantidadDeElementos;
}


function sumaValor(aumentaArrelo){
    var valor = (parseInt(prompt("digite un valor a aunmetar")))
    for (let index = 0; index < arreglo.length; index++) {
        resultado = valor + arreglo[index]
        
    }
    return valor 
}


function sumaImPares(){
    let totalImpares = 0

    for(let i = 0; i < arreglo.length; i++){
        
        if( (arreglo[i] % 2) != 0){
            totalImpares = totalImpares + arreglo[i]
        }
        
    }
    return totalImpares
}


function mayorArreglo(){
    let valorMayor = 0

    for(let i = 0; i < arreglo.length; i++){

        if(arreglo[i] > valorMayor){
            valorMayor = arreglo[i]
        }

    }

    return valorMayor
}

function mayorDiferencia(){

    let valorDiferenciaMayor = 0
    let diferencia = 0
    for(let i = 0; i <= arreglo.length; i++){

        //sacar la diferencia
        diferencia = arreglo[i] - arreglo[i+1]

        //convertir en absoluto
        if(diferencia < 0){
            diferencia = diferencia*-1
        }

        //acá preguntamos si la diferencia entre las dos celdas es mayor al valor de diferencia que guardamos
        //Si es verdadero, guardamos esa diferencia
        //si es falso, no hace nada y sigue teniendo el mismo valorDiferenciaMayor que se había guardado
        if(diferencia > valorDiferenciaMayor){
            valorDiferenciaMayor = diferencia
        }
    }
    return valorDiferenciaMayor
}


function encontrarElemento(valorNumero){

    let encontroNumero = false;

    for(let i = 0; i < arreglo.length; i++){

        if(valorNumero == arreglo[i]){
            encontroNumero = true
        }

    }

    return encontroNumero
}


function posicionElemento(valorNumero){
    let encontroNumero = false;
    let posicion = -1;
    for(let i = 0; i < arreglo.length; i++){

        if(valorNumero == arreglo[i]){
            encontroNumero = true
            posicion = i;
            i = arreglo.length;
        }

    }

    //return
    if(encontroNumero){
        return posicion
    }else{
        return -1
    }

}



function invertirArreglo(){
    
    let auxArregloInvertido = []
    auxArregloInvertido.length = arreglo.length
    let auxPosicion = 0

    for(let i = arreglo.length; i >= 0; i--){
        auxArregloInvertido[auxPosicion] = arreglo[i];
        auxPosicion++;
    }
    arreglo = auxArregloInvertido
}



function insertarElemento(posicion, valor){

    //Llenar el auxiliar arreglo
    //no sirve hacerlo auxArreglo = arreglo;
    let auxArreglo = []
    auxArreglo.length = arreglo.length
    for(let i = 0; i < arreglo.length-1; i++){
        auxArreglo[i] = arreglo[i]
    }

    for(let i = posicion; i < arreglo.length-1; i++){
        if(i == posicion){
            arreglo[i] = valor 
            arreglo[i+1] = auxArreglo[i]
        }else{
            arreglo[i+1] = auxArreglo[i]
        }
    }
}


function mostrarHileraArreglo(){

    for(let i = 0; i < arreglo.length; i++){
        console.log("posición: "+i+" valor: "+arreglo[i])
    }

}


function finalizarAplicacion(){
    finalizar = true;
}
construir(largo)//2

do {
    var opcion = parseInt(prompt(
        `1. llenar arreglo \n
2. Sacar el promedio del arreglo \n
3. Sacar el total de mayores al promedio \n
4. Aumentar Arreglo \n
5. Sumar Impares \n
6. Mostrar el número mayor del arreglo \n
7. Muestre el valor de la mayor diferencia en valor absoluto entre dos celdas consecutivas del arreglo \n
8. Buscar número en el arreglo \n
9. Buscar posición de un número en el arreglo \n
10. Invertir arreglo\n
11. Sustituir el valor de una posicion específica \n
12. Mostrar hilera del arreglo\n
13. Finalizar aplicación`
    ))

    switch (opcion) {
        case 1:
            llenar()
            break;
        case 2://4
            console.log(promedioArreglo(arreglo))
            break;
        case 3://5
            console.log("Hay un total de " + mayoresPromedio() + " mayores al promedio")
            break;
        case 4://6
            sumaValor()
            console.log ("el resultado de la suma fue: " + (arreglo))
            break;
        case 5://7
            console.log("La suma total de impares es: " + sumaImPares())
            break;
        case 6://8
            console.log("El valor mayor del arreglo es: " + mayorArreglo())
            break;
        case 7://9
            console.log("El valor absoluto mayor entre dos celdas consecutivas es: " + mayorDiferencia())
            break;
        case 8://10
            let numeroConsulta = parseInt(prompt("¿Qué número deseas buscar en el arreglo?"))
            console.log("El resultado de la búsqueda fue: " + encontrarElemento(numeroConsulta))
            break;
        case 9://10
            let numeroConsultaPosicion = parseInt(prompt("¿Qué número deseas buscar en el arreglo para que retorne la posicion?"))
            console.log("El resultado de la búsqueda fue: " + posicionElemento(numeroConsultaPosicion))
            break;
        case 10://11
            invertirArreglo()
            console.log("El arreglo fue invertido con éxito")
            break;
        case 11://12
            let posicion = parseInt(prompt("¿Qué posicion desea sustituir?"))
            let valor = parseInt(prompt("¿Qué valor deseas asignar?"))
            insertarElemento(posicion, valor)
            console.log("el cambio fue:" + (arreglo))
            break;
        case 12://13
            mostrarHileraArreglo()
            break;
        case 13://14
            finalizarAplicacion()
            break;
    }
} while (!finalizar)