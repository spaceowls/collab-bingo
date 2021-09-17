const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile['production']) // Alterar para development ou production

module.exports = knex