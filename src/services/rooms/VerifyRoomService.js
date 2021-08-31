const knex = require('../../database');

async function EnterRoomService(code) {
    const room = await knex('bingo').where({ code }).select().then(room => room[0]);
    
        if(!room) {
            return {
                message: "Código Inválido",
                status: 400
            }
        }

    if(room.members >= room.max_members) {
        return {
            message: "Sala Cheia!",
            status: 400
        }
    }

    return {
        room,
        status: 200
    };
}

module.exports = EnterRoomService;