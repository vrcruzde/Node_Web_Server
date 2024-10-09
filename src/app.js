 const {envs} = require('./config/env');
const {startServer} = require ('./server/server');

// se inicializa el servidor
 const main = () => {
    startServer({
        port:envs.PORT,
        public_path:envs.PUBLICA_PATH
    })
 }

 //funciona agnostica autoconvocada
 // Agnostica porque no tiene nombre
 // Autoconvocada porque ejecutamos con los parentesis

 (async () => {
    main()
 })()