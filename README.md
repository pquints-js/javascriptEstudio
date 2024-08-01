#Apuntes Javascript
JAVASCRIPT FORMULAS
1.- Variables: Hay 3 tipos: VAR que sin importar donde se declare, puede ir en cualquier lugar de codigo 
tambien tenemos el LET: usado solo y unicamente en un bloque de codigo en particular
y CONST: constante tipo de variable pensado para establecer un valor en particular para que no pueda cambiar en la ejecucion de un programa
Diferencias entre VAR y LET (solo para ciertos bloques)
“concatenación”; une elementos asi como un console.log + nombre, ver ejemplo en la imagen

var nombre = "Paolo";
var edad = '33';
var presenteONo = true;
var apellido = 'Quintiliani';
var estatura = 1.82




/* alert('Hola ' +  nombre); */ /* concatenacion */
console.log('Nombre:' + nombre + '' + typeof nombre); /* typeof te da el tipo de datos conocer el tipo de datos */
console.log('Edad:' + edad + '' + typeof edad);
console.log('Presente:' + presenteONo + '' + typeof presenteONo);
console.log('Apellido:' + apellido + '' + typeof apellido);
console.log('Estatura:' + estatura + '' + typeof estatura);


Operadores Aritméticos:
Básicamente son +,-, *(multiplicación), / (división), % (módulo o resto)que determinara si el número es par o impar
Comparaciones Relacionales, igualdad ==, desigualdad !=. igualdad estricta ===, desigualdad estricta !==, mayor > o menor < y mayor o igual >= menor o igual <=

if (true) {
var nombre = 'Hola loco';
}
console.log(nombre);
const email = 'paoloquintiliani91@gmail.com';
/* demostracion aritmetica */
var suma = 35 + 3;
console.log(suma);
var resta = 20 - 4;
console.log(resta)
var multi = 9 * 9;
console.log(multi)
var division= 30/2;
console.log(division);
var resto = 60%2;
console.log(resto);
/* operadores comparacion relacionales true false si se cumplen determinadas condiciones */
console.log(5>2);
console.log(98<1);
console.log(4==4);
var numero = 9;
console.log(4==numero);
/* Operadores logicos */
var edad = 18;
var carnet = false;
console.log(carnet);
/* and */
console.log(edad >=18 && carnet==true);
console.log("--------");


/* ejemplo or */
console.log(edad >=18 || carnet == true);

AND (&&)Y OR (||); AND se usa cuando deben cumplir ambas condiciones y OR cuando se debe cumplir una condición u otra

NOT: ! Usada para negar el valor de una condicion, ej true pasa a falsa y viceversa
Estructuras condicionales 
IF/SI permite ciertas condiciones si hace una acción o no, el código se ejecutará si se cumple la condición

ELSE: código que se ejecutará si no se cumple la condición. suele ir de la mano con el IF

/* ejemplo IF + ELSE, NO SE PUEDE PONER ELSE SOLO SIN EL IF COMPLEMENTO IF OJO CON ESO */


Ejemplo: notas del colegio, si aprove se puede salir, si no estudiar mas, aqui se nota el if y else para las condiciones mencionadas anteriormente.
var aprobe = true;



if (aprobe == true) {
    console.log('Podemos salir!!!');

}
else {
    console.log('Tengo que estudiar');

}

Ejercicio SWITCH ejercicio de los colores por descarte. 
var color = prompt ('Ingresa un color');
switch (color) {
case 'rojo':
console.log('Es rojo');
break;

case 'azul':
console.log('Es azul');
break;

case 'amarillo':
console.log('Es amarillo');
break;

default:
    console.log('El color ingresado no es valido');
    break;
}
Estructuras repetitivas - ciclos
var contador =0;
while (contador <10);{
console.log('Estoy en la vuelta N°10' + contador);
contador++; /* podria usar contador+contador+1 */
/* } */
/* no ejecutar el while */


 for( var i = 1; i<=10; i++){
console.log('Vuelta n°' + i);
} */


/* do while */
var contador = 0; /* si ponemos 11, la condicion no se cumplira */
do {
    console.log('Vuelta n°' + contador);
    contador++;
}
while (contador <= 10)
i es un indice


WHILE / MIENTRAS: permite ejecutar un bloque de código en forma repetitiva mientras se cumple una determinada función
la condición siempre se evaluará al inicio del bucle (si es válida se ejecutara el código) ¡ojo con este si se ejecuta mal ralentizará tu pc xD! 

FOR: Realiza un bucle una determinada cantidad de veces, es controlado por un contador que de hecho lo tiene implícito en su sintaxis 

3 partes 
Inicialización= solo 1 vez
Condición fin ciclo  = se evalúa esta expresión al comienzo de cada iteración.
Modificación de la variable= se ejecuta al final de la iteración.


DO WHILE / HACER MIENTRAS
Permite llevar a cabo una determinada acción de forma repetitiva de igual manera que el while - su principal diferencia es que la condición se evalúa siempre al final del ciclo o bucle. ejecutable al menos una vez


DOM : Document Object Model es el mapa del html
let elemento = document.getElementById('titulo');
elemento.addEventListener('click', function () {
    elemento.innerHTML = 'Adios';
    elemento.className = 'colorFondo';
    //elemento.style = 'font-size: 50px;';
});


let parrafoTitulo = document.getElementById('contenedorParrafoTitulo');
parrafoTitulo.innerHTML = '<p> Párrafo agregado desde JS, recordar que innerHTML renderiza las etiquetas, lo conversamos clases anteriores cuando comparamos con TextContent</p>';
console.log(parrafoTitulo);



Existen dos tipos de funciones, las que vienen incluídas en JavaScript (también llamadas built-in functions), como por ejemplo console y Math: 
Tipos de funciones:
 
console.debug(Object);     
console.info(Object); 
console.error(Object); 
console.log(Object); 

Y las otras, son las que podemos definir nosotros: 
Math.random(); 
function hola(nombre)
{ console.log(`Hola ${nombre}.`) } hola('Javier'); // => Hola Javier

No todas las funciones poseen un nombre, sino que también existen las funciones anónimas, las cuales son asignadas (de ser necesario) a una variable que otorgará el nombre para poder ser invocada posteriormente: Otras formas de desarrollar funciones 

const nombre = function (parametro1, parametro2, ...) { 
// ... 
} 
nombre()
 

parseInt es una función de alto nivel y no está asociada a ningún objeto. La función parseInt comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada. Por ejemplo, una base de 10 indica una conversión a número decimal, 8 octal, 16 hexadecimal, y así sucesivamente
