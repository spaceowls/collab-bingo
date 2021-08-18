const knex = require('../../database');

async function ListUsersService() {
    const list = await knex('users').select().then(users => users);
    const users = list.map(user => {
        delete user.password;
        return user;
    });

    return users;
}

module.exports = ListUsersService;