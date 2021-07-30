const knex = require('../database')
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
            avatar: "https://milvus.online/wp-content/uploads/2017/05/avatar-default.jpg",
            coins: 0,
            role: 0,
            victories: 0
        });
        return {
            success: "usuário cadastrado com sucesso."
        }
    }else {
        return {
            error: "usuário já existe no banco de dados."
        }
    }

}

module.exports = CreateUserService;