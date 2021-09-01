const knex = require('../../database');

async function DeleteCartelaService(bingo_id) {
    await knex('cartelas').where({ bingo_id }).delete();
    return {
        message: "cartela deletada com sucesso!",
        status: 200
    }
}

module.exports = DeleteCartelaService;