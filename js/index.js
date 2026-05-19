//alert("hola mundo")
/*
let nombre= "santi"
let nombre_completo = "santino marquez"
console.log(nombre_completo)
document.writeln("<h1><i>santino de uruguay</i> </h1>")

TIPOS DE DATOS PRIMITIVOS (SON LOS MAS BASICOS)
string: texto 
number: numeros enteros y decimales
booleans: true or false 
objects: objetos y arrays


let edad = 14
let numero ="14"
console.log(edad)
console.log(typeof edad)
console.log(typeof numero)

EJEMPLO DE UN ARRAY:
let amigos = ["reynoso","mateo","lucca","luis",20]
console.log(amigos[4])

EJEMPLO DE UN ARRAY MULTIDIMENSIONAL:
let animales = ["foca","perro","nutria",["lagarto","pinguino","pajaro"]]
console.log(animales[3][1])

EJEMPLO DE OBJETOS:
let persona = {
    nombre: "ricardo",
    edad: 39,
    mascotas: ["coco", "benito", "edgar"]
}
console.log(persona)
persona.mama = "elizabeth"
console.log(persona)
persona.auto = {
    marca: "nisan",
    modelo: "tida",
    año: 2013
}
console.log(persona)
let animales = ["foca","perro","nutria",["lagarto","pinguino","pajaro"]]
animales[4] = "delfin"
console.log(animales)
*/

let num1 = 14
let num2 = 41
let resultado = num1 + num2
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(resultado)

//IF-ELSE
/*
EJERCICIO 1: APRENDIENDO A USAR IF 

if (1 >0) {
    console.log("la operacion es correcta, 1 si es mayor que 0")
}
  *******************************************************************  
EJERCICIO 2: APRENDIENDO A USAR IFELSE

  if (71 < 23) {
    console.log(
        "la operacion es correcta"
    )
} else {
    console.log(
        "error, 23 no es mayor que 71"
    )
}

*********************************************************************
EJERCICIO 3: UTILIZANDO VARIABLES DENTRO DE UN IFELSE


let a = 41
let b = 7812
let c = 41

if (a > b) {
    console.log(
        "A es mayor que B"
    )
} else {
    console.log(
        "A ES MENOR que B"
    )
}

*********************************************************************

EJERCICIO 4: USE TEMPLATE STRINGS PARA IMPRIMIR VARIABLES

let nombre = "santino"
let edad = 14

console.log(
    "hola mi nombre es "+ nombre + " y tengo " + edad + " años"
)

console.log(
    `hola mi nombre es ${nombre} y tengo ${edad} años `
)
--------------------------------------------------------------------------------
EJERCICIO 5: diferencia entre tipo de datos string y number

let numero1 = 90
let caja = "santi"
let caja2 = "90"
let caja3 = 90

console.log(
    numero1 == caja2 // 2 signos de igual significan que la computadora verificara si son iguales EN VALOR
)

console.log(
    numero1 === caja2 // 2 signos de igual significan que la computadora verificara si son iguales EN VALOR Y TIPO DE DATO
)
*/

//hacer un programa que me inprima buenos dias si son las 5am hasta las 11am, buenas tardes si son las 12am hasta las 18hs, buenas noches si son las 7pm hasta las 4am y error se me dan otro dato
let hora = 20
if (hora >= 5 && hora <= 11) {
    console.log("buenos dias")
} else if(hora >=12 && hora <= 18){
    console.log("buenas tardes")
}
// else if(hora >= 19 && hora <= 24 && hora >= 0 && hora <= 4){
    //console.log("buenas noches")
//}

for (let index = 0; index < 11; index++) {
    console.log(index)

}