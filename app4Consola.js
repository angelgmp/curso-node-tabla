/*******************************************************************/
/****** Para ejecutarlo. Desde la terminal            **************/
/****** node app4Consola --base=4 --listar --hasta=20 **************/
/******                 ó                             **************/
/****** node app4Consola -b=4 -l -h=20                **************/
/******                 ó                             **************/
/****** node app4Consola -b 4 -l -h 20                **************/
/******                 ó                             **************/
/******    combinaciones de lo anterior               **************/
/*******************************************************************/

const { crearArchivo } = require('./helpers/multiplicar4Consola.js');
const argv = require( './config/miyargs');

// Funciona de las dos formas
//const colores = require('colors');
require('colors');

console.clear();
console.log( process.argv );
console.log( argv );
console.log('base: yargs', argv.base);


// console.log(process.argv);

// Desestructurando los argumentos de la linea de comandos
// y colocando un valor por defecto por si no se pone en la línea de comandos
// * const [ , , argumento3 = 'base=5' ] = process.argv;

// Desestructurando el argumento3 y poniendo el valor por defecto, por si no ponen nada
// * const [ , base ] = argumento3.split('=');

// console.log(argumento3);
// console.log(base);

// const base = 8

// puede ser base o solamente b y listar o l
crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log( err ))