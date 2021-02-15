const color = require('colors');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = (base = 5 , listar, hasta) =>{

    return new Promise((resolve,reject) =>{

        let salida = '';
    
        
        for(let i = 1; i<= hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }

        if (listar) console.log(salida);
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        resolve(`tabla-${base}.txt`.rainbow);
    

    
        
    });


}

module.exports = crearArchivo;