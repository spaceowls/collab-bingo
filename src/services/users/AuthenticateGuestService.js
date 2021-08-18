const knex = require('../../database');
const { sign } = require('jsonwebtoken');
const { v4: uuid } = require('uuid');

async function AuthenticateGuestService(username) {

    const existUsername = await knex('users').where({ username }).select().then(user => user[0]);

    if(existUsername) {
        return {
            message: "nome de usuário indisponível.",
            status: 400
        }
    }
    
    const user_id = uuid();

    const token = sign({ user_id, username, role: "guest" }, '138a4a1e1e5c145a470f3874a4bf5483', {
        subject: user_id,
        expiresIn: '1d'
    });


    return {
        token,
        status: 200
    };
}

module.exports = AuthenticateGuestService;