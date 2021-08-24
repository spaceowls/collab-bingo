const knex = require('../../database')
const { hash } = require('bcrypt');
const { v4: uuid } = require('uuid');


async function CreateUserService(username, password,) {
    const passwordHashed = await hash(password, 8);

    const userCheck = await knex('users').where({
        username
    }).select('username').then(user => user);


    const existUser = userCheck.find(user => user.username === username);

    if(!existUser) {
        await knex('users').insert({
            id: uuid(),
            username,
            password: passwordHashed,
            points: 0,
            role: "user",
        });
        return {
            message: "usuário cadastrado com sucesso.",
            status: 200
        }
    }else {
        return {
            message: "usuário já existe no banco de dados.",
            status: 400
        }
    }

}

module.exports = CreateUserService;