// definir funcion
function saludar() {
    debugger;
    // definir variables
    var nombre = document.getElementById("username");
}

// Ejemplos de javascript
function javaScriptBegin() {
    // Definicion de variables
    var variable1; // para definir variables en bloque y globales
    let variable2; // para definir variables en bloque
    const CONSTANTE_1 = 1; // para definir constante y no se modifican
    // arreglo o lista
    let frutas = ['Manzana', 'Platano', 'Cereza'];
    // acceder a un elemento
    console.log(frutas[0]);
    // añadir elemento
    frutas.push('Naranja');
    // eliminar ultimo elemento
    frutas.pop();
    frutas.splice(2, 1); // eliminar posicion 3 solo un elemento
    delete(frutas[3]); // eliminar la posicion 3
    console.log(frutas);
    // para las tuplas seria:
    const coordenadas = [10, 20]; // simulando tupla
    Object.freeze(coordenadas); // haciendo a la tupla inmutable

    // ciclos o bucles
    // ciclo for de 1 a 10
    for(let i = 1; i <= 10; i++) { 
        // parametro 1: el desde, 
        // parametro 2: mientras cuando se ejecuta
        // y el prametro 3: el contador
        console.log(i);
    }
    // recorrer una lista
    frutas.forEach( function (x) {
        console.log(x);
    });
    // transformacion de un arreglo
    let frutas2 = frutas.map(function (x) {
        return x;
    })

    // while
    let a = 1
    while (a <= 10) {
        a++;
    }

    // objetos
    let persona = {
        nombre: "Pedro",
        apellido: "Rojas",
        email: "pedro@sucorreo.cl"
    };

    console.log(persona.nombre);

    // Serializacion y deserealizacion
    var objeto2 = "{nombre:\"Pedro\",apellido:\"Rojas\",email:\"pedro@sucorreo.cl\"}";
    // deserealizar: convert un string a objeto javascript
    var objeto3 = JSON.parse(objeto2);
    // serializar: convertir un objeto javascrit a string
    var salida = JSON.stringify(persona);
    
    // bloques de condicion
    // == es para igualdad
    // === es para igualdad estricta
    // && para representar el and
    // || para representar el or
    // !== para representar el distinto
    // ! para representar el not

    if (2 == '2') {
        // bloque de codigo verdadero
    } else {
        // bloque de codigo falso
    }

    if (2 == '2') {
        // bloque de codigo verdadero
    } else if (3 == 3) {
        // segundo bloque de codigo verdadero
    } else {
        // bloque de codigo falso
    }

    // Trabajo con objetos
    let objeto1 = {
        id: 1,
        nombre: "Angela",
        apellido: "Castro",
        showFullName: function () {
            console.log(`${nombre} ${apellido}`)
        }
    }

    objeto1.showFullName()

    class Persona {
        constructor(nombre, apellido) {
            this.nombre = nombre;
            this.apellido = apellido
        }

        saludar() {
            console.log(`Hola, mi nombre es ${this.nombre}`);
        }
    }
    let persona1 = new Persona("Pedro", "Rojas");

    // Herencia
    class Empleado extends Persona {
        constructor(nombre, apellido, edad, puesto) {
            super(nombre, apellido);
            this.edad = edad;
            this.puesto = puesto;
        }

        presentar() {
            console.log(`Hola, mi nombre es ${this.nombre} y soy ${this.puesto}`);
        }
    }

    // Encapsulamiento: el principio de ocultar detalles internos de un objeto,
    // y exponer solo lo necesario.
    class CuentaBancaria {
        #saldo; // con # protejemos el atributo

        constructor (saldoInicial) {
            this.#saldo = saldoInicial;
        }

        depositar (cantidad) {
            if (cantidad > 0) {
                this.#saldo += cantidad;
            }
        }

        verSaldo() {
            console.log(`El saldo actual es: ${this.#saldo}`);
        }
    }

    let cuenta1 = new CuentaBancaria(100000);
    
    // Polimorfismo: permite qye diferentes clases tengan metodos con el mombre
    // pero con comportamientos diferentes
    class Animal {
        hablar() {
            console.log('Un sonido de animal');
        }
    }

    class Perro extends Animal {
        hablar() {
            console.log('Guau Guau');
        }
    }
}

// arrow functions
const suma = (a, b) => {
    total = a + b;
    return total;
}

const suma2 = (a, b) => a + b;

// Los operadores ternarios
// const resultado = a === b ? 'Si' : 'No';


// Asignar evento a un elemento o control del documento web
let botonSumar = document.getElementById("boton_sumar");
console.log(botonSumar);

botonSumar.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Hice click!!!');
    // recuperar valor cuadro texto 1
    let cuadroTextoValor1 = document.getElementById("valor1");
    let valor1 = cuadroTextoValor1.value;
    // recuperar valor cuadro texto 2
    let cuadroTextoValor2 = document.getElementById("valor2");
    let valor2 = cuadroTextoValor2.value;
    // sumar los valores como numeros
    let resultadoSuma = suma2(parseInt(valor1), parseInt(valor2));
    // Infomar el resultado en el div
    let divResultado = document.getElementById("resultado_suma");
    divResultado.innerHTML = `El resultado de la suma es: ${resultadoSuma}`;
    let h1Resultado = document.getElementById("resultado_suma2");
    h1Resultado.innerHTML = `El resultado de la suma es: ${resultadoSuma}`;
});