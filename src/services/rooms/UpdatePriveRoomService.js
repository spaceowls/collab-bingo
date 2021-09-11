const knex = require('../../database');

async function UpdatePrivateRoomService(code) {
    await knex('bingo').where({ code }).update({
        private: 1
    }).then(() => {
        return {
            message: "room change private to true"
        }
    }).catch(err => {
        throw new Error('room not change to private');
    });
}

module.exports = UpdatePrivateRoomService;