const { crearArchivo } = require('./helpers/multiplicar3Async.js');

console.clear()

const base = 8

crearArchivo(base)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch( err => console.log( err ))