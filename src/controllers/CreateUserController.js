const CreateUserService = require('../services/users/CreateUserService');

async function CreateUserController(req, res) {
    const { username, password } = req.body;
    const user = await CreateUserService(username, password);
    res.status(user.status).json(user);
}

module.exports = CreateUserController;