//TODO: passar o codigo para assembly x86
const express = require('express');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Socket } = require('socket.io');


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
    socket.join('sala1');
    console.log('entrei na sala')
    let clientsInRoom = 0;


    let usersCount = io.sockets.adapter.rooms.get('sala1').size
    
    socket.to('sala1').emit('recebi', usersCount);
    
    if (io.sockets.adapter.rooms.has('sala1')) clientsInRoom = io.sockets.adapter.rooms.get('sala1').size
    console.log('o numero de pessoas na sala1 é', clientsInRoom)
    
    socket.on('disconnect', () => {
        socket.leave('sala1');
        console.log('sai da sala')
        let clientsInRoom = 0;
        if (io.sockets.adapter.rooms.has('sala1')) clientsInRoom = io.sockets.adapter.rooms.get('sala1').size
        console.log('o numero de pessoas na sala1 é', clientsInRoom)
        socket.to('sala1').emit('recebi', clientsInRoom)
    });

    //Criação de salas socket.io
    
          
    socket.on('join', (room)=> {		
		socket.join(room);
		// socket.broadcast.emit('new room', room);
        socket.on('mensagem', () => {
            socket.to(room).emit('salve', 'O dono da sala mandou essa mensagem');
        })

        socket.on('mudarLocal', () => {
            socket.to(room).emit('redirect', 'salve');
            // socket.leave(room);
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
            sortearNumero();
            io.in(room).emit('sorteadas', {sorteadas});
        })
	});



    // NUMEROSSSSS
    socket.on('bingo', ()=> {
        console.log("alguem deu bingo")
        io.emit('respostaBingo');
    });


    // M O D A I S 
    socket.on('alguem deu bingo', function(data){
        if (data.numerosDoBingo == data.numerosDaCartela){
            io.emit('win');
        }else{
            io.emit('loss');
        }
    })
}) 

app.use(router)

                        
http.listen(port, () => console.log(`Server rodando na porta ${port}`));
