//manejo de variables de entorno
require('dotenv').config()
const{get} = require('env-var');

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLICA_PATH: get('PUBLICA_PATH').default('public').asString()
}

module.exports ={
     envs
}