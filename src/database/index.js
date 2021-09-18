const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile['development']) // Alterar para development ou production

module.exports = knex