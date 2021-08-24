const knex = require('../../database');

async function EnterRoomService(code) {
    const room = await knex('bingo').where({ code }).select().then(room => room[0]);
    
        if(!room) {
            return {
                message: "Código inválido",
                status: 400
            }
        }

    if(room.members >= room.max_members) {
        return {
            message: "sala cheia!",
            status: 400
        }
    }

    await knex('bingo').where({ code }).update({ members: room.members += 1 });

    return {
        room,
        status: 200
    };
}

module.exports = EnterRoomService;