const knex = require('../../database');
const { v4: uuid } = require('uuid');

async function CreateRoomService(name, private, max_members) {
    let roomCode;

    for(let i = 0; i < 6; i++) {
        i == 0 ? roomCode = Math.floor(Math.random() * 6).toString() : 
        roomCode += Math.floor(Math.random() * 6).toString()
    }
    const existRoom = await knex('bingo').where({ code: roomCode }).select().then(room => room[0]);

    if(!existRoom) {
        await knex('bingo').insert({
            id: uuid(),
            name,
            private,
            max_members,
            members: 1,
            code: `#${roomCode}`
        });

        return {
            message: "sala criada com sucesso!",
            status: 200
        }
    }

    return {
        message: "Sala já existente",
        status: 500
    }
}

module.exports = CreateRoomService;