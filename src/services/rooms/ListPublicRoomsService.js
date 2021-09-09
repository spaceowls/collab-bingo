const knex = require('../../database');

async function ListPublicRoomsService() {
    const rooms = await knex('bingo').where({ private: 0 }).orderBy('members', 'desc').select().then(rooms => rooms);
    return {
        rooms,
        status: 200
    };
}

module.exports = ListPublicRoomsService;