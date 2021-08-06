const knex = require('../database');
const { compare } = require('bcrypt');

async function EnterRoomService(code, password) {
    const room = await knex('bingo').where({ code }).select();

    if(room.length < 1) {
        return {
            error: "Código inválido"
        }
    }

    const roomSelected = room[0];

    if(roomSelected.private) {
        const comparePassword =  await compare(password, roomSelected.password);
        if(comparePassword) {
            delete roomSelected.password;
            return roomSelected;
        }else {
            return {
                error: "senha incorreta."
            }
        }
    }

    return room[0];
    
}

module.exports = EnterRoomService;