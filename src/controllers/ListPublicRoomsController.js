const ListPublicRoomsService = require("../services/rooms/ListPublicRoomsService");

async function ListPublicRoomsController(req, res) {
    const resposta = await ListPublicRoomsService();
    res.render('telaSalasDeBingos', {
        salas: resposta.rooms
    });
}

module.exports = ListPublicRoomsController;