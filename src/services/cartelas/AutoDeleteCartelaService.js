const knex = require('../../database');

async function AutoDeleteCartelaService(owner_user) {
    const existCartela = await knex('cartela').where({ owner_user }).select().then(cartela => cartela[0]);

    if(existCartela) {
        await knex('cartelas').where({owner_user: existCartela.owner_user}).delete();
    }
}

module.exports = AutoDeleteCartelaService;