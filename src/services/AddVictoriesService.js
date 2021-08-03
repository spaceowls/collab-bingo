const knex = require('../database');

async function AddVictoriesService(id, coins) {
    const getData = await knex('users').where({ id }).select(['victories', 'coins']).then(user => user[0]);
    let { victories, coins: userCoins } = getData;

    await knex('users').where({ id }).update({
        victories: victories += 1,
        coins: userCoins += coins 
    });
}

module.exports = AddVictoriesService;