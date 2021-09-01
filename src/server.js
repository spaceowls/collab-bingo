//TODO: passar o codigo para assembly x86
const express = require('express');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { Socket } = require('dgram');


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
app.use(router)

io.on('connection', socket => {
    console.log('+1 bingueiro online', socket.id)

    socket.on('disconnect', ()=> {
        console.log("menos 1 online");
    });
    
    // socket.on('sala', ()=>{
    //     console.log('entrou na sala')
    //     socket.join('sala1');  
        
    //     io.to('sala1').emit('entrou') 
    // } )
    
});

http.listen(port, () => console.log(`Server rodando na porta ${port}`));
