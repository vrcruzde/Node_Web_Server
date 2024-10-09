//manejo de variables de entorno
//require('dotenv').config()
import env from 'dotenv'
import envvar from 'env-var';

env.config()


export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLICA_PATH: envvar.get('PUBLICA_PATH').default('public').asString()
}

