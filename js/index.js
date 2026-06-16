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


/*
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
  *****************************************************************************************
  EJERCICIO 1: CREO UN BUCLE Y ME SALTO EL NUMERO 6  

for (let index = 0; index < 11; index++) {
    if (index == 6) {
        continue
    }
    console.log(index)
}
    ***************************************************************************************
    EJERCICIO 2: CREE UN BUCLE QUE SE DETIENE CUANDO LLEGA A 5

for (let index = 0; index < 11; index++) {
    
    console.log(index)
    if (index == 5) {
        break
    }
    
}
   ****************************************************************************************
   EJERCICIO 3: CREE UN BUCLE QUE ME IMPRIME LOS NUMEROS DEL 10 AL -1 
for (let index = 10; index >= -1; index--) {
    console.log(index)
    
}
    ****************************************************************************************
    EJERCICIO 4: CREE UN BUCLE QUE EMPIEZA EN EL 10 PERO SE DETIENE EN EL 7

for (let index = 10; index > 0; index--) {
    if (index == 7) {
        break
        
    }
    console.log(index)
    
}
      
let frutas = ["manzana","naranja","banana","frutilla","durazno"]
console.log(frutas.length)
for (let index = 0; index < frutas.length; index++) {
    console.log(frutas[index]) 
    
}
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])
  
 let calificaciones = [
    [10, 8, 5, 3, 1],
    [9, 7, 6, 4, 2],
    [11, 12, 15, 17, 20],
    [13, 14, 16, 18, 19]

 ]
 
 
console.log(calificaciones)
console.log(calificaciones[0])
console.log(calificaciones[0][0])
for (let index = 0; index < calificaciones.length; index++) {
   for (let uruguay = 0; uruguay < calificaciones.length; uruguay++) {
   console.log(calificaciones[index][uruguay])
    
   }
    
 }*/
let autos =[
    {modelo: "mustang",anio:1962 },
    {modelo: "360z",anio:2010 },
    {modelo: "civic",anio:2007 }
]
for (let index = 0; index < autos.length; index++) {
   // console.log(autos[index])
    console.log(autos[index].modelo +" "+ autos[index].anio)
}