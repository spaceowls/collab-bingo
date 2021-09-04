//TODO: passar o codigo para assembly x86
const express = require('express');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const app = express();
const port = 3000;  

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//nao usa isso em produção
app.use(cors())

// AQUI COMEÇA SOCKET.IO
app.use('/room/:code', (req, res, next) => {
    io.on('connection', socket => {
        console.log('entrei na sala')
        socket.on('disconnect', () => {
            console.log('sai')
        })
    });
    next();
}) 

app.use(router)


http.listen(port, () => console.log(`Server rodando na porta ${port}`))