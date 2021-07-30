const knex = require('../database');

async function AddVictoriesService(id) {
    const getVictories = await knex('users').where({ id }).select('victories').then(user => user[0]);
    let { victories } = getVictories;

    await knex('users').where({ id }).update({
        victories: victories += 1 
    });
}

module.exports = AddVictoriesService;