const knex = require('../database');

async function RankingService() {
    const users = await knex('users').select().then(users => users);
    const usersNoPassword = users.map(user => {
        delete user.password;
        return user;
    });
    const ranking = usersNoPassword.sort((a, b) => a.victories > b.victories ? -1 : a.victories < b.victories ? 1 : 0);
    return ranking;
}

module.exports = RankingService;