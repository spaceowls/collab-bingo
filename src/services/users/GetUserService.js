const knex = require('../../database');

async function GetUserService(id) {
    
    const user = await knex('users').where({ id }).select().then(user => user[0]);

    if(!user) {
        return {
            error: "Usuário não encontrado."
        }
    }
    
    delete user.password;
    return user;
}

module.exports = GetUserService;