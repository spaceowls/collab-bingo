const ListUsersService = require('../services/ListUsersService');

async function ListUsersController(req, res) {
    const users = await ListUsersService();
    res.json(users);
}

module.exports = ListUsersController;