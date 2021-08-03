const knex = require('../database');
const { compare, hash } = require('bcrypt');

async function EditUserService(id, username, old_password, new_password) {
    const user = await knex('users').where({ id }).select().then(user => user[0]);

    if(!new_password || !old_password) {
        await knex('users').where({ id }).update({
            username
        });

        return {
            message: "dados atualizados."
        }
    }

    const comparePassword = await compare(old_password, user.password);

    if(!comparePassword) {
        return {
            error: "senha atual incorreta."
        }
    }

    const hashedPassword = await hash(new_password, 8);
    
    await knex('users').where({ id }).update({
        username,
        password: hashedPassword
    });

    return {
        message: "dados atualizados."
    }

}

module.exports = EditUserService;