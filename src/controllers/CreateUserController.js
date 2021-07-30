const CreateUserService = require('../services/CreateUserService');

async function CreateUserController(req, res) {
    const { username, password } = req.body;
    const user = await CreateUserService(username, password);
    res.json(user);
}

module.exports = CreateUserController;