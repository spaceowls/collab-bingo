const knex = require('../../database');

async function DeleteCartelaService(id) {
    await knex('cartelas').where({ id }).delete();
    return {
        message: "cartela deletada com sucesso!",
        status: 200
    }
}

module.exports = DeleteCartelaService;