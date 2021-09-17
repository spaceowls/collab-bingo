const knex = require('knex')
const config = require('../../knexfile')

const db = knex(config.production) // Alterar para development ou production