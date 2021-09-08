//TODO: passar o codigo para assembly x86
const express = require('express');
const router = require('./routes');
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

// AQUI COMEÇA SOCKET.IO
io.on('connection', socket => {

    //Criação de salas socket.io
    
    socket.on('join', (room, user, owner) => {		
        socket.id = user;
		socket.join(room);
        let owner_id = owner;
        console.log(owner_id)
        const clients = io.sockets.adapter.rooms.get(room)
        console.log('Entrou na sala: ' + room);
        
        socket.on('mensagem', () => {
            socket.to(room).emit('salve', 'O dono da sala mandou essa mensagem');
        }) 
        socket.on('mudarLocal', () => {
            socket.to(room).emit('redirect', 'salve');
        });

        socket.on('disconnect', () => {
            const isOwner = owner_id === socket.id ? true : false;
            delete clients[socket.id];
            if(isOwner) {
                setTimeout(() => {
                    const exists = io.sockets.adapter.rooms.get(room);
                    if(!!exists) {
                        console.log(exists)
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
                    }else{
                        console.log('Sala não existe')
                    }
                }, 3000)
            }
        })

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

    let vencedor = '';
    // M O D A I S 
    socket.on('alguemDeuBingo', (id, username) =>{
        if(!vencedor){
            vencedor = id;
            socket.broadcast.emit('win', vencedor, username, room);
        }   
    })

    socket.on('osoutrosperderam', ()=>{
            socket.broadcast.emit('loss'); 
    })
	});
}) 

app.use(router)

                        
http.listen(port, () => console.log(`Server rodando na porta ${port}`));
