const knex = require('../database');

async function DeleteUserService(id) {
    await knex('users').where({ id }).delete();

    return {
        message: "deletado com sucesso"
    }
}

module.exports = DeleteUserService;