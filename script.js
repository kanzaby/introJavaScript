//Variables
//Reserva de memoria, donde guardo informacion. La informacion puede cambiar (en tiempo de ejecucion)

//var
var name = "Adrian"

let number = 1

//lets
let pet = "Dog"

//const
const lastName = "Cordoba";

//-----------------------------------------------------------------------------------------------//

var name = "Diego";

//Incremento y decremento
number++;
number--;


//concatenacion
//console.info("el nombre del facilitador " +  name + " " + "y tengo un " + pet)
let buenas = "Buenas"
console.log(buenas.concat(`jenni`, ` ten felices sueños.`))


//interpolacion
//console.info(`mi nombre es ${name} y tengo un ${pet}`)

//-----------------------------------------------------------------------------------------------//

//Ejercicios//
//Escribir una oración o texto por consola (que cuente lo que quieran)
//La oración o texto debe estar compuesto por 3 variables, 3 constantes. Y al menos 3 tipos de datos.

var saludo = "saludo"
var sujeto = "persona"
var nombreSujeto = "Carlos"

console.info(saludo + "a una" + sujeto + "ÿ su nombre es " + nombreSujeto)
// hice una interpoblación//
const construccion = "casa"
let nombre = "Jennifer"
let mascota = "Cares"
let sentimiento = "felices"
console.info(`mi nombre es ${nombre} y tengo un gato que se llama ${mascota} y vivimos en una ${construccion} y somos muy ${sentimiento}`)
//-----------------------------------------------------------------------------------------------//

//Funciones>
//Una función es un bloque de instrucciones que puede ejecutarse tantas veces como desee.
//Una función puede tener parámetros y devolver un valor. Las funciones se pueden definir de diferentes 
//maneras. Quizás la más común es la declaración de función. Comienza con la palabra clave function. Sigue:
//El nombre de la función,los parámetros encerrados entre paréntesis, las afirmaciones encerradas entre corchetes.


var a = 6
var b = 5
var numeroNUevo = 56
var nuenmeroMasNUevo = 86

function sumar(nuemroA, numeroB) {
  return nuemroA + numeroB;
}

var result = sumar(b, nuenmeroMasNUevo)

console.info(result)


function aprenderarestar(longitudancho) {
  return longitudancho * longitudancho;
}
var longitudancho = 20
var resultado = aprenderarestar(longitudancho)
console.info(resultado)

function aprenderarestar1 (aa,bb){
  return aa - bb
}
let resultado5 = aprenderarestar1 (5,3)
console.info(resultado5)

function aprenderamultiplicar (a , b) {
  return a*b
}
let resultado8 =aprenderamultiplicar(5,5)
console.info(resultado8)


//esta función  es una condicional : Es una instrucción de que algo debe ser cierto, para que algo pueda pasar, 
//se evalua para verdadero o falso, si o no. 
//En este caso seria si eres mayor de 18 años puedes conducir? si los tienes que salga el string 
//de que si puedes conducir.
//primero declaramos la función que se llama validarEdad ,en los parametros (le damos unos datos que tambien
//pueden ser variables para que la función pueda funcionar, en este caso es edad, porque pedimos la edad.)
//2 ponemos if que una de las condiciones y le decimos segun los parametros que si "edad" es + o = que 18 me 
//retorne la respuesta de si puededo conducir esto se llama instruccion ( los que recibe la funcion cuando se la llame)
//y si no aqui se pone else que nos retorne no puedes conducir.

function validarEdad(edad) {
  if (edad >= 18) {
    return "puedes conducir"
  }
  else{
    return "no puedes conducir"
  }
}

let edadJenni = 42
//aqui empezamos a validar la funcion
//le ponemos la variable let resultado2 (para que nos de un resultado) el resultado seria poner el nombre de la funcion 
//que le hemos puesto a la funcion y le tenemos que dar unos parametros ( en este caso hemos puesto la variable
//let edadJenni = 42, para saber si jenni o diego o raul quien se quiera puede o no conducir según su edad, o poner un 
//numero en la variable let resultado2 en los parametros)

let resultado2 = validarEdad(edadJenni)

console.info(resultado2)


function sitengodinero(dinero) {
  if (dinero >= 1000){
    return "puedo tener un gato"
  }
  else {
    return"no puedo tener un gato"
  }
}
let dineroTifani= 50
let dineroJuan= 1500
let resultado3 = sitengodinero(5)
console.info(resultado3)

function vestirpantalon (ropa){
  if (ropa >= "pantalon") { 
    return "puedo vestirme" 
  }
  else {
    return "no puedo vestirme"
  }
}
var prendaJenni= "calcentin"
let resultado4 = vestirpantalon(prendaJenni)
console.info(resultado4)

function dimesiesParOImpar (numero){
if (numero % 2 == 0) {
  return "es par"
}
else {
  return "es impar"
}
}

let resultado6 = dimesiesParOImpar (8)
console.info(resultado6)
//-----------------------------------------------------------------------------------------------//

//Ejercicios//
//1
//Defina una función helloque devuelva 'Hello world!'. 
//Imprimirla en consola con un string que nos calare que ejercicio es.
const str1 = "hello";
const str2 = "World";
console.log(str1.concat(` `, str2))


//2
//Defina dos funciones.
//La primera función adebería devolver 'Hello a!'y la segunda función bdebería devolver 'Hello b!'.
//Imprimirla en consola con un string que nos calare que ejercicio es.
const str3 = "Hello a";
const str4 = "Hello b";
console.log(str1.concat(` `, str3));
console.log(str2.concat(` `, str4));

//3
//Defina una función greet que devuelva el valor 'Haydo!'.
//Declarar una variable salutation. 
//Llame a la función greety asigne el resultado de la llamada a la variable salutation.
//Imprimirla en consola con un string que nos calare que ejercicio es.

//declaro la funcion
function greet() {
  return "Haydo!"
}

//llamo a la funcion
//let resultado = greet()

//imprimo la consola
console.log(resultado);



function restar(d, c) {
  return d - c
}

//Llamar a la función
greet();
//Parámetros

function give(input) {
  return input;
}

//definimos una función que simplemente devuelve el parámetro input. Los parámetros son variables. 

//let result = give('apple');//

//llamamos a la función y le pasamos el argumento 'apple'. La función será ejecutada. 

//El argumento 'apple'se asignará al parámetro input. Input obtiene el valor 'apple'. 
//La variable input se devuelve en la única línea de código de la función. 
//Este retorno se asigna a la variable result. Finalmente, result tiene el valor 'apple'.

function dame(apple) {
  return `apple`;
}
var result = dame("apple")
console.info(result)
//Ejercicio
//Escribir una función echo que también devuelva el parámetro pasado. 
//echo('Greta') debe volver 'Greta'y echo('CO2') debe volver'CO2'
function echo (prueba) {
  return prueba;  
}
let valor1 = "Greta"
let valor2 = "CO2"
let resul7t = echo (valor2);

console.info(resul7t)



//CONDICIONALES ------- que son???
//ARRAYS ------que son??? que funciones existen para maniular Arrays?

