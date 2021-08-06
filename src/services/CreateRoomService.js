const knex = require('../database');
const { v4: uuid } = require('uuid');
const { hash } = require('bcrypt');

async function CreateRoomService(user_id, name, password, premiacao, private, max_members) {
    let roomCode;

    for(let i = 0; i < 6; i++) {
        i == 0 ? roomCode = Math.floor(Math.random() * 6).toString() : 
        roomCode += Math.floor(Math.random() * 6).toString()
    }
    const existRoom = await knex('bingo').where({ code: roomCode }).select().then(room => room[0]);

    let hashedPassoword;
    
    if(!existRoom) {
        if(password) {
           hashedPassoword = await hash(password, 8);
        }

        await knex('bingo').insert({
            id: uuid(),
            name,
            password: private ? hashedPassoword : password,
            FKuserID: user_id,
            premiacao,
            private,
            max_members,
            code: `#${roomCode}`
        });

        return {
            message: "sala criada com sucesso!"
        }
    }
}

module.exports = CreateRoomService;