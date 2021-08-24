const knex = require('../../database');

async function DeleteUserService(id) {
        const user = await knex('users').where({ id }).select().then(user => user[0]);

        if(!user) {
            return {
                message: "Usuário não existe.",
                status: 400
            }
        }else {
            await knex('users').where({ id }).delete();
            return {
                message: "usuário deletado com sucesso",
                status: 200
            }
        }
    }

module.exports = DeleteUserService;