const knex = require('../database');

async function UpdateAvatarService(id, avatar ) {
    await knex('users').where({ id }).update({ avatar });
    return {
        message: "Avatar atualizado!"
    };
}

module.exports = UpdateAvatarService;