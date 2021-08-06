const knex = require('../database');

async function DeleteRoomService(id) {
    await knex('bingo').where({ id }).delete();

    return {
        message: "sala deletada com sucesso"
    }
}

module.exports = DeleteRoomService;