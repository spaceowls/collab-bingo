const knex = require('../../database');
const { sign } = require('jsonwebtoken');
const { compare } = require('bcrypt');

async function AuthenticateUserService(username, password) {
    const user = await knex('users').where({ username }).select().then(user => user[0]);

    if(!user) {
        return {
            message: "usuário/senha incorretos.",
            status: 400
        }
    }
    
    const comparePassword = await compare(password, user.password);
    
    if(!comparePassword) {
        return {
            message: "usuário/senha incorretos.",
            status: 400
        }
    }

    const token = sign({ user_id: user.id, role: user.role }, '138a4a1e1e5c145a470f3874a4bf5483', {
        subject: user.id,
        expiresIn: '1d'
    });


    return {
        token,
        status: 200
    };
}

module.exports = AuthenticateUserService;