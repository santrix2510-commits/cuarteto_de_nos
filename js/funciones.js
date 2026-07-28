/*function suma() {
    console.log(2+2)
}
suma()*/
multiplicacion(9012,705)
function saludable() {
    console.log("come frutas y verduras")
}
saludable()

function santi(params) {
    console.log(params)
}
santi("hola soy santi y vivo en Uruguay")

function multiplicacion(num1,num2) {//las palabras dentro de este parentesis se llaman "parametros", y almacenas mis valores
    console.log(num1*num2)
}
multiplicacion(9012,705)

// Parametro por defecto 
function suma(num1,num2 = 0) {
    return num1 + num2 //return no esta obligado a mostrar el resultado "en consola", PERO! si devuelve el resultado
}
console.log(1 + suma(900, ))    

// FUNCION FLECHA
/*let operacionMatematica = (uno, dos) => {
    console.log(uno + dos)
}
    //FUNCION FLECHA RESUMIDA
operacionMatematica(5, 892)
operacionMatematica = (parametro1, parametro2) => parametro1 + parametro2
 

    console.log(operacionMatematica(837, 9001))
         FUNCION FLECHA AUN MAS RESUMIDA
let operacionMatematica = parametro => parametro + 190
    console.log(operacionMatematica(190))*/