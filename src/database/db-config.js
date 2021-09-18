const knex = require('knex')
const config = require('../../knexfile')

const db = knex(config.development) // Alterar para development ou production