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

// Tarea extra>
// Selecciona contenedor.
const contenedor = document.getElementById("contenedor")

// Selecciona clase .segundo.
const classSegundo = contenedor.getElementsByClassName("segundo")

// Selecciona clase .tercero dentro de la lista ol.
const classTerceroDelOlLi = contenedor.querySelectorAll("ol .tercero")

// Cambia el titulo del contenedor.
const textContenedor = contenedor.querySelector("p")
textContenedor.innerText = "¡Hola!"
textContenedor.style.fontWeight = "bold"

// Agrega y desagrega la clase .principal al div con clase .footer
const footer = document.querySelector("div.footer")
footer.classList.add('principal')
console.log(footer.classList)
footer.classList.remove('principal')
console.log(footer.classList)

// Crea un elemento li.
const nuevoLi =document.createElement("li")
nuevoLi.innerText = "cuatro"
nuevoLi.style.fontWeight = 'bold'

// Añade el elemento a ul.
const ul = document.querySelector("ul")
ul.appendChild(nuevoLi)

