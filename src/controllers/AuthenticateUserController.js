const AuthenticateUserService = require("../services/AuthenticateUserService");


async function AuthenticateUserController(req, res) {
    const { username, password } = req.body;

    const user = await AuthenticateUserService(username, password);
    res.json(user);
}

module.exports = AuthenticateUserController;