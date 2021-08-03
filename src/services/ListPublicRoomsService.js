const knex = require('../database');

async function ListPublicRoomsService() {
    const rooms = await knex('bingo').where({ private: 0 }).select().then(rooms => rooms);
    return rooms;
}

module.exports = ListPublicRoomsService;