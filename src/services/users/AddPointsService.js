const knex = require('../../database');

async function AddVictoriesService(id, points) {
    const getData = await knex('users').where({ id }).select(['points']).then(user => user[0]);

    if(getData){
        let { points: userPoints } = getData;
    
        await knex('users').where({ id }).update({
            points: userPoints += points
        });
    }
}

module.exports = AddVictoriesService;