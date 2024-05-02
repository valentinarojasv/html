document.querySelector('#header').innerHTML = "Estoy leyendo el documento For.js"

for (let index1 = 1; index1 <= 10; index1++){
    
for (let index2 = 1; index2 <= 10; index2++){
    var respuesta = index1*index2
  console.log(index1 + "x" + index2 + "=", respuesta)
}
}

