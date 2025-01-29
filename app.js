/*let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'Escribe un numero del 1 al 10'

function intentoDeUsuario  () {
    alert('click desde el boton')
}*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() { // Aquí estaba el error
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los números, salir
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        // Si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto(); // Corrección de la llamada recursiva
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar la caja 
    limpiarCaja();
    // indicar mensaje de intervalos de números 
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();




/*Crear una función que muestre "¡Hola, mundo!" en la consola.

function mostrarHolaMundo() {
    console.log("¡Hola, mundo!");
}

mostrarHolaMundo(); // Llamada a la función*/


//Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.

/*function mostrarHolaMundo(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
mostrarHolaMundo('Jonatan');*/


//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

/*function obtenerDoble(numero) {
    return numero * 2;
}

// Solicitar al usuario que ingrese un número
let numeroUsuario = parseInt(prompt('Escribe un número'));

// Llamar a la función y mostrar el resultado
let resultado = obtenerDoble(numeroUsuario);
console.log(`El doble de ${numeroUsuario} es ${resultado}`);*/

//Crear una función que reciba tres números como parámetros y devuelva su promedio.


/*let numero1= parseInt(prompt('Escribe un número'));
console.log(numero1);
let numero2 = parseInt(prompt('Escribe un número'));
console.log(numero2);
let numero3 = parseInt(prompt('Escribe un número'));
console.log(numero3);
function promedioValores (numero1,numero2,numero3) {
    let suma = numero1 + numero2 + numero3;
    let promedio = suma / 3;
    return promedio;
   }
let resultado = promedioValores(numero1,numero2,numero3);
alert(`El valor promedio de los 3 números es: ${resultado}`);
console.log(`El valor promedio de los 3 números es: ${resultado}`);*/

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
// Solicitar dos números al usuario
/*let numero1 = parseInt(prompt('Escribe un número'));
console.log(numero1);
let numero2 = parseInt(prompt('Escribe otro número'));
console.log(numero2);

// Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos
/*function numeroMayor(numero1, numero2) {
    let valorMayor;
    if (numero1 > numero2) {
        valorMayor = numero1;
    } else {
        valorMayor = numero2;
    }
    return valorMayor; // Devolver el número mayor
}
// Llamar a la función y almacenar el resultado
let mayor = numeroMayor(numero1, numero2);

// Mostrar el resultado en un alert y en la consola
alert(`El valor mayor de los 2 números es: ${mayor}`);
console.log(`El valor mayor de los 2 números es: ${mayor}`);*/

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

// Solicitar un número al usuario
/*let numero = parseInt(prompt('Escribe un número'));

// Función que calcula el cuadrado de un número
function numeroMultiplicado(numero) {
    let resultado = numero * numero; // Calcular el cuadrado
    return resultado; // Devolver el resultado
}

// Llamar a la función y mostrar el resultado
let resultado = numeroMultiplicado(numero);
console.log(`${numero} x ${numero} es:  ${resultado}`);
alert(`${numero} x ${numero} es:  ${resultado}`);*/
   
//Eres un desarrollador de software que trabaja con JavaScript y necesitas crear una función que verifique si un número es positivo, negativo o cero. Tu tarea es implementar una función que reciba como parámetro un número entero y muestre un mensaje en la consola según las siguientes reglas:

//Si el número es mayor que cero, el mensaje debe ser: "El número es positivo."
//Si el número es menor que cero, el mensaje debe ser: "El número es negativo."
//Si el número es igual a cero, el mensaje debe ser: "El número es cero."
//Puedes utilizar la estructura de control if-else para verificar las condiciones y mostrar el mensaje correspondiente en la consola.

//Analiza las siguientes alternativas y marca aquella que contiene el código que cumple con todas las reglas mencionadas anteriormente:

/*function verificarNumero(numero) {
    // Resumen del flujo de ejecución
    // La función evalúa si el número es mayor que 0.
    // Si no lo es, verifica si es menor que 0.
    // Si no se cumple ninguna de las dos condiciones anteriores, ejecuta el else porque el número debe ser igual a 0.
    // Finalmente, imprime el mensaje correspondiente en la consola.
    // Esta estructura es clara y eficiente para manejar los tres casos posibles: positivo, negativo o cero.

    if (numero > 0) {
        console.log('El número es positivo');
    } else if (numero < 0) {
        console.log('El número es negativo.');
    } else {
        console.log('El número es cero');
    }
}
*/