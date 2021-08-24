const ListUsersService = require('../services/users/ListUsersService');

async function ListUsersController(req, res) {
    const users = await ListUsersService();
    res.json(users);
}

module.exports = ListUsersController;