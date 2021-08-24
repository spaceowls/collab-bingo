const knex = require('../../database');

async function LeaveRoomService(id) {
    const room = await knex('bingo').where({ id }).select().then(room => room[0]);
    
        if(!room) {
            return {
                message: "Sala não encontrada",
                status: 500
            }
        }else {
            await knex('bingo').where({ id }).update({ members: room.members -= 1 });
        
            return {
                room,
                status: 200
            };
        }

}

module.exports = LeaveRoomService;