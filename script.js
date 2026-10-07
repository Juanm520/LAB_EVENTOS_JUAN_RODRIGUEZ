// Tarea 1> Cambiar estilo del parrafo desde un boton.
function cambiarEstilo() {
    const parrafo = document.getElementById("parrafo")
    parrafo.style.fontFamily = "Monospace"
    parrafo.style.color = "blue"
    parrafo.style.fontSize = "20px"
}

// Tarea 2> Obtener valores del formulario.
function obtenerValores(event) {
    event.preventDefault()
    const datos = document.forms["form1"].elements
    console.log(`Nombre: ${datos["fname"].value} \nApellido: ${datos["lname"].value}`)
} 

// Tarea 3> Mostrar alerta con la ifromacion de los enlaces.
function alertaEnlaces() {
    const datosEnlaces = document.querySelectorAll("a")
    alert(`Enlaces totales: ${datosEnlaces.length} \nPrimer enlace: ${datosEnlaces[0].href} \nUltimo enlace: ${datosEnlaces[datosEnlaces.length - 1].href}`)
}

