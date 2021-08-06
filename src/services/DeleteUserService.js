const knex = require('../database');

async function DeleteUserService(id) {
    await knex('users').where({ id }).delete();

    return {
        message: "usuário deletado com sucesso"
    }
}

module.exports = DeleteUserService;