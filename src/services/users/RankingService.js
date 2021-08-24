const knex = require('../../database');

async function RankingService() {
    const users = await knex('users').select().then(users => users);
    const usersNoPassword = users.map(user => {
        delete user.password;
        delete user.role;
        return user;
    });
    const ranking = usersNoPassword.sort((a, b) => a.points > b.points ? -1 : a.points < b.points ? 1 : 0);
    return ranking;
}

module.exports = RankingService;