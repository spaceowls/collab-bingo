require('express-async-errors');
const express = require('express');
const router = require('./routes');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./middlewares/errorMiddleware');
const error404 = require('./middlewares/error404');

const app = express();
const port = process.env.PORT || 3000;  

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorMiddleware);

// AQUI COMEÇA SOCKET.IO
const teste = [];
io.on('connection', socket => {

    //Criação de salas socket.io
    socket.on('join', (room, user, owner, username, maxMembers) => {		
        socket.id = user;
		socket.join(room);
        let owner_id = owner;
        const clients = io.sockets.adapter.rooms.get(room);
        let fixedMaxMembers;

        
        if(teste[room]){
            const userData = {
                id: user,
                username,
                pedras: 24
            }
            const existUser = teste[room].find(usr => usr.id === user);
            if(!existUser) {
                teste[room].push(userData);
            }
        }else{
            teste[room] = [];
            const userData = {
                id: user,
                username,
                pedras: 24
            }
            teste[room].push(userData);  
        }

        socket.broadcast.emit('lista-users', room, teste[room])

        
        if(!fixedMaxMembers){
            fixedMaxMembers = maxMembers
        }

        if(clients.size >= 3) {
            socket.broadcast.emit(`dono-${room}`, 'liberado');
        }
        
        if(clients.size > maxMembers) {
            socket.broadcast.emit(`stop-${user}`);
        }

        socket.broadcast.emit('novo membro', room, clients.size);
        socket.broadcast.emit('add member', room, clients.size, username);
        socket.on('mensagem', () => {
            socket.to(room).emit('salve', 'O dono da sala mandou essa mensagem');
        });
        socket.on('mudarLocal', () => {
            socket.to(room).emit('redirect', 'salve');
        });

        socket.on('pedra marcada', (user_id) => {
            const user = teste[room].find(usr => usr.id === user_id);
            const indexUser = teste[room].indexOf(user);
            const newValue = user.pedras = user.pedras - 1;
            teste[room][indexUser].pedras = newValue;
            const pedrasAtualizadas = teste[room][indexUser].pedras;
            socket.broadcast.emit('pedra foi marcada', room, user_id, pedrasAtualizadas);
        })

        socket.on('fim da partida', (sala) => {
            delete teste[sala];
        });

        socket.on('disconnect', () => {
            const isOwner = owner_id === socket.id ? true : false;
            delete clients[socket.id];
            socket.broadcast.emit('novo membro', room, clients.size);
            socket.broadcast.emit('remove member', room, clients.size, username);
            if(clients.size < 3) {
                socket.broadcast.emit(`dono-${room}`, 'fechado');
            }
            if(isOwner) {
                setTimeout(() => {
                    const exists = io.sockets.adapter.rooms.get(room);
                    if(!!exists) {
                        const users = [];
                        users.push(...exists)
                        const owner_exist = users.find(owner => owner === owner_id);
                        if(owner_exist){
                            socket.broadcast.emit('redirect', room);
                        }else{
                            socket.broadcast.emit('dono saiu', room);
                            setTimeout(() => {
                                socket.broadcast.emit('saiu da sala', room);
                            }, 1000)
                        }
                    }
                }, 3000)
            }
        });

        let numerosDoBingo = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
            23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
            42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
          ];
        let sorteadas = [];

        function sortearNumero() {
            const number = Math.floor(Math.random() * numerosDoBingo.length);
            if(sorteadas.length !== numerosDoBingo.length){
                if(sorteadas.includes(numerosDoBingo[number])) {
                    sortearNumero()
                }else{
                    sorteadas.unshift(numerosDoBingo[number]);
                }
            }else{
                socket.emit('finalizado');
            }
        }
        
        socket.on('pedras', () => {
            const sortear = setInterval(() => {
                sortearNumero();
                socket.broadcast.emit('sorteadas', {sorteadas}, room);
            }, 4000)

            if(sorteadas.length === numerosDoBingo.length){
                clearInterval(sortear)
            }
        })

        // M O D A I S         
    let vencedor = '';
    socket.on('alguemDeuBingo', (id, username) =>{
        if(!vencedor){
            vencedor = id;
            socket.broadcast.emit('win', vencedor, username, room);
        }   
    })
	});
}) 

app.use(router, error404)

http.listen(port, () => console.log(`Server rodando na porta ${port}`));