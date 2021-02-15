const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type : 'number',
                        describe: 'Es la base de la table de multiplicar',
                    })
                    .option('h',{
                        alias: 'hasta',
                        type : 'number',
                        demandOption: true,
                        describe: 'Es hasta donde se quiere la tabla',
                    })
                    .option('l',{
                        alias : 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en consola',
                    })
                    .check((argv,options)=>{
                        if(isNaN(argv.b)){
                            throw 'La base tiene que ser un número';
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;