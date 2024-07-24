/* Ingresar dos numeros mediante un prompt y almacenar sus valores en dos variables distintas
realizar una resta entre los dos valores en javascript
almacenar el resultado en una variable. si el resultado de la resta es mayor a 0, mostrar mediante un consolelog o un alert el mesnsaje es mayor a 0
si es mayor a 0 comparar si el numero es par, en caso de que lo sea, mostrar un mensaje es par en caso que no lo se que diga es impar
en caso que sea menor a 0, mostrar un mensaje que diga es menor o igual a 0 */

var num1 = prompt ('Ingresa el num1');
var num2 = prompt ('Ingresa el num2');

var resta = num1 - num2; 

if(resta >0){
console.log('Es mayor a 0');
let imparpar = resta % 2;

if (imparpar ==0){
    console.log('es par');
} 
else{
    console.log('Es impar');
}

}

else {
    console.log('Es menor o igual a 0');
}


