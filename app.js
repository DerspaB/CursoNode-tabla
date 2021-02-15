
const argv = require('./config/yargs');
const crearArchivo = require('./helpers/multiplicar');




console.clear();
console.log(argv);






crearArchivo(argv.b, argv.l, argv.h)
    .then(nombre => console.log(nombre, 'creado'));
    

