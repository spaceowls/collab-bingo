const knex = require('../database');

async function EnterRoomService(code) {
    const room = await knex('bingo').where({ code }).select();

    if(room.length < 1) {
        return {
            error: "Código inválido"
        }
    }

    return room[0];
    
}

module.exports = EnterRoomService;