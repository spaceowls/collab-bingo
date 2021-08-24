const AuthenticateGuestService = require("../services/users/AuthenticateGuestService");

async function AuthenticateGuestController(req, res) {
    let guest = 'anonimo_';
    for(let i = 0; i < 10; i++) {
        i == 0 ? userNumber = Math.floor(Math.random() * 10).toString() : 
        userNumber += Math.floor(Math.random() * 10).toString()
    }

    const resposta = await AuthenticateGuestService(`${guest += userNumber}`);
    res.status(resposta.status).json(resposta);
}

module.exports = AuthenticateGuestController;