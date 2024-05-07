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
    
}