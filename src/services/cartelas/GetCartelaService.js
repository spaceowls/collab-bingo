const knex = require('../../database');

async function GetCartelaService(user_id) {
    const cartela = await knex('cartelas').where({ owner_user: user_id }).select().then(cartela => cartela[0]);
    
    if(cartela) {
        return {
            cartela,
            status: 200
        }
    }else{
        return {
            message: 'Cartela não existe',
            status: 400
        }
    }
}

module.exports = GetCartelaService;