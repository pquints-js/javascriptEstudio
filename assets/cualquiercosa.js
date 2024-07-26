var numero1 = prompt ('Ingresa el numero:');
var numero2 = prompt ('Ingresa el numero:');

let divide = function (numero1, numero2){
let resultado = parseInt(numero1) / parseInt (numero2);
return resultado;
};

document.write('Resultado de la division:' + divide(numero1, numero2));