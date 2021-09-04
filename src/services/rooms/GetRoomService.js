const knex = require('../../database');

async function GetRoomService(id) {
    const room = await knex('bingo').where({ id }).select().then(room => room[0]);
    return {
        room
    };
}

module.exports = GetRoomService;