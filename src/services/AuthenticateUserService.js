const knex = require('../database');
const { sign } = require('jsonwebtoken');
const { compare } = require('bcrypt');

async function AuthenticateUserService(username, password) {
    const user = await knex('users').where({ username }).select().then(user => user[0]);

    if(!user) {
        return {
            error: "usuário/senha incorretos."
        }
    }
    
    const comparePassword = await compare(password, user.password);
    
    if(!comparePassword) {
        return {
            error: "usuário/senha incorretos."
        }
    }

    const token = sign({ user_id: user.id }, '138a4a1e1e5c145a470f3874a4bf5483', {
        subject: user.id,
        expiresIn: '1d'
    });


    return token;
}

module.exports = AuthenticateUserService;