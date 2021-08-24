const knex = require('../../database');

async function GetCartelaService(id) {
    const cartela = await knex('cartelas').where({ id }).select().then(cartela => cartela[0]);
    return {
        cartela,
        status: 200
    };
}

module.exports = GetCartelaService;