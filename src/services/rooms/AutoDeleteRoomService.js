const knex = require('../../database');

async function AutoDeleteRoomService(user_id) {
    const existRoom = await knex('bingo').where({ user_id }).select().then(room => room[0]);

    if(existRoom) {
        await knex('bingo').where({ user_id }).delete();
        await knex('cartelas').where({bingo_id: existRoom.id}).delete();
    }
}

module.exports = AutoDeleteRoomService;