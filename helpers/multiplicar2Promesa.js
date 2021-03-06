const fs = require('fs');

const crearArchivo = (base = 5) => {

    return new Promise( (resolve, reject) => {

        console.log('=====================')
        console.log('    Tabla del', base)
        console.log('=====================')

        let salida = ''

        for(let i=1; i<=10; i++) {
            salida += `${base} x ${i} = ${base * i} \n`
        }

        console.log(salida)

        /* fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt creado`)
        }) */

        fs.writeFileSync( `tabla-${base}.txt`, salida);

        // console.log(`tabla-${base}.txt creado`);
        resolve(`tabla-${base}.txt`);
    })
}

module.exports = {
   // crearArchivo: crearArchivo; esto es lo que dice que es redundante
   crearArchivo
}