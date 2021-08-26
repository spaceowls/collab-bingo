const { verify } = require('jsonwebtoken');

function redirectLogin(req, res, next) {
    const { usuarioLogado } = req.cookies;
    verify(usuarioLogado, '138a4a1e1e5c145a470f3874a4bf5483', (err) => {
                if(!err) {
                    res.redirect('/')
                    next();
                }else{
                    next();
                }
    });
}

module.exports = redirectLogin;