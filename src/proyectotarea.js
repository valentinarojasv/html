document.querySelector('#header').innerHTML = "Estoy leyendo el documento Proyecto.js"

var tareas = []

function agregar_tarea() {
    var tarea = prompt("ingrese el nombre de la tarea")
    tareas.push(tarea)
}

function modificar_tarea() {
    var mode = prompt("tarea por remplazar")
    var numero = prompt("Ingrese el numero de la tarea")
    tareas[numero]=mode    
}

function eliminar_tarea() {
    var tarea = parseInt(prompt("ingrese el numero de la tarea que desea eliminar"))
    tareas.splice(tarea, 1)
}

function ver_tareas() {
    alert(tareas)
}

var finalizar = true

do {
    var opcion = prompt("1. Agregar tarea \n2. Modificar tarea \n3. Eliminar tarea en especifico \n4. Ver tareas \n5. Finalizar")
    switch (parseInt(opcion)) {

        case 1:
            agregar_tarea()
            break;
        case 2:
            modificar_tarea()
            break;
        case 3:
            eliminar_tarea()
            break;
        case 4:
            ver_tareas()
            break;
        case 5:
            inicio = prompt("Desea salir de la terminal")
            if(inicio == "si"){
            }
            finalizar = false
            break;
    }
} while (finalizar == true)