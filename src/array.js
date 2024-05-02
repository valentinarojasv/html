document.querySelector('#header').innerHTML = "Estoy leyendo el documento Array.js"

var cesta = ["Fresa","Pera","Cereza"]
console.log

cesta[0] = "Uva" // para modificar el valor de una posicion
console.log(cesta)

console.log(cesta.length) // ver tamaño de array

cesta.push("Naranja") // agrega un elemento al array
console.log(cesta)

cesta.pop() // elimina el ultimo elemnto del array
console.log(cesta)

cesta.push("Naranja")
cesta.push("Piña")
console.log(cesta)
/*
El segundo parametro (1) indica cuantos elementos eliminar 
desde el indice proporcionado (2) 
*/

cesta.splice(2, 2)
console.log(cesta)

console.log(cesta[2])

var cestaVacia =[] // crear un array vacio




var opcion = prompt("1. Ver elementos de la cesta\n2. Agregar una fruta a la cesta\n3. Quitar una fruta de la cesta")
