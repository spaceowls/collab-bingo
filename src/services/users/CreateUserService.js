const knex = require('../../database')
const { hash } = require('bcrypt');
const { v4: uuid } = require('uuid');
const AuthenticateUserService = require('./AuthenticateUserService');


async function CreateUserService(username, password,) {
    if(!password || password.split('').length < 6) {
        return {
            message: 'Sua senha deve conter mais de 6 caracteres.',
            status: 400
        }
    }

    const passwordHashed = await hash(password, 8);

    const userCheck = await knex('users').where({
        username
    }).select('username').then(user => user);


    const existUser = userCheck.find(user => user.username === username);

    if(!existUser) {
        const user_id = uuid();

        await knex('users').insert({
            id: user_id,
            username,
            password: passwordHashed,
            points: 0,
            role: "user",
        });

        const auth = await AuthenticateUserService(username, password);

        return {
            token: auth.token,
            status: 200
        }
    }else {
        return {
            message: "Usuário já existe no banco de dados.",
            status: 400
        }
    }

}

module.exports = CreateUserService;