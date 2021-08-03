const knex = require('../database');
const { v4: uuid } = require('uuid');

async function CreateRoomService(user_id, premiacao, private) {
    let roomCode;

    for(let i = 0; i < 6; i++) {
        i == 0 ? roomCode = Math.floor(Math.random() * 6).toString() : 
        roomCode += Math.floor(Math.random() * 6).toString()
    }
    const existRoom = await knex('bingo').where({ code: roomCode }).select().then(room => room[0]);

    if(!existRoom) {
        await knex('bingo').insert({
            id: uuid(),
            FKuserID: user_id,
            premiacao,
            private,
            code: `#${roomCode}`
        });

        return {
            message: "sala criada com sucesso!"
        }
    }
}

module.exports = CreateRoomService;