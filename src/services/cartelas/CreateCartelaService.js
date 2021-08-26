const knex = require('../../database');
const { v4: uuid } = require('uuid');

async function CreateCartelaService(bingo_id, user_id, numeros) {
    await knex('cartelas').insert({
        id: uuid(),
        numeros,
        FKbingoID: bingo_id,
        owner_user: user_id
    });

    return {
        message: "cartela criada com sucesso!",
        status: 200
    };
}

module.exports = CreateCartelaService;