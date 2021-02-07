const fs = require('fs');

// require('colors');
// lo ponemos así para utilizarlo como función, pero podríamos usarlo como en las líneas punteadas de título .green
const colores = require('colors');

const crearArchivo = async(base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        let miConsola = '';
        
        for(let i=1; i<=hasta; i++) {
            //esto es lo que se almacena en el archivo
            salida += `${base} x ${i} = ${base * i} \n`

            //esto es lo que vemos en la pantalla
            //hacemos una copia para que no se almacenen caraceteres raros por eso de los colores
            miConsola += `${base} ${'x'.yellow} ${i} ${ '='.bgMagenta } ${base * i} \n`
        }
        
        if( listar ) {
            console.log('====================='.green)
            console.log('    Tabla del'.green, colores.blue(base))
            console.log('====================='.green)
            console.log(miConsola)
        }

        /* fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log(`tabla-${base}.txt creado`)
        }) */

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

        
}

module.exports = {
   // crearArchivo: crearArchivo; esto es lo que dice que es redundante
   crearArchivo
}