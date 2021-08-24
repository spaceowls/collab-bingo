const AuthenticateUserService = require("../services/users/AuthenticateUserService");


async function AuthenticateUserController(req, res) {
    const { username, password } = req.body;

    const user = await AuthenticateUserService(username, password);

    if(user.token) {
        res.cookie('usuarioLogado', user.token, { maxAge: 9000000, httpOnly: true });
    }

    res.status(user.status).json(user.token || user.message);
}

module.exports = AuthenticateUserController;