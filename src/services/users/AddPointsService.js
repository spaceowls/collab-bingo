const knex = require('../../database');

async function AddVictoriesService(id) {
    const getData = await knex('users').where({ id }).select(['points']).then(user => user[0]);

    if(getData){
        let { points: userPoints } = getData;
    
        await knex('users').where({ id }).update({
            points: userPoints += 20
        });
    }
}

module.exports = AddVictoriesService;