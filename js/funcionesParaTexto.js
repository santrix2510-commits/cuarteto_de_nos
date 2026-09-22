let nombre = "Santino"
console.log(nombre.length) // lenght me muestra cuantas letras tiene el texto dentro de la variable

let apellido = "Marquez"
let nombreCompleto = nombre.concat(" ", apellido) // concat une variables
console.log(nombreCompleto)

console.log(nombreCompleto.toLowerCase()) // toLowerCase me pone todas las letras en minuscula 
console.log(nombreCompleto.toUpperCase())
console.log(nombreCompleto.substring(0,5))

let apellidosCompletos = "Marquez Serron Baglieto Trias"   
let Palabras = apellidosCompletos.split(" ")
console.log(Palabras)

let texto = "Hola, me llamo Santi soy de Uruguay y tengo 14, y estudio en Uruguay"
console.log(texto.indexOf("Uruguay"))
console.log(texto.lastIndexOf("Uruguay"))