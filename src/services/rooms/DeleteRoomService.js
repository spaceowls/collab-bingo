const knex = require('../../database');

async function DeleteRoomService(id) {

    const room = await knex('bingo').where({ id }).select().then(bingo => bingo[0]);

    if(!room) {
        return {
            message: "Sala não existente",
            status: 500
        }
    }else {
        await knex('bingo').where({ id }).delete();
    
        return {
            message: "sala deletada com sucesso",
            status: 200
        }
    }

}

module.exports = DeleteRoomService;