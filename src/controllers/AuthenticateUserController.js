const AuthenticateUserService = require("../services/users/AuthenticateUserService");


async function AuthenticateUserController(req, res) {
    const { username, password } = req.body;

    const user = await AuthenticateUserService(username, password);

    res.status(user.status).json(user);
}

module.exports = AuthenticateUserController;