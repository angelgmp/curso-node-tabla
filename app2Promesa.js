const { crearArchivo } = require('./helpers/multiplicar2Promesa.js');

console.clear()

const base = 7

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log( err ))