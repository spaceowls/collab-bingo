const { verify } = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const { usuarioLogado } = req.cookies;
    verify(usuarioLogado, '138a4a1e1e5c145a470f3874a4bf5483', (err, decoded) => {
        if(err) {
            res.redirect('/login');
        }else {
            req.body.userAuthenticated = decoded;
            next();
        }
    });
}

module.exports = verifyToken;