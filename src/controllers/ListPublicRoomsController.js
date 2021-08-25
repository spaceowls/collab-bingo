const ListPublicRoomsService = require("../services/rooms/ListPublicRoomsService");

async function ListPublicRoomsController(req, res) {
    const { userAuthenticated } = req.body;
    console.log(userAuthenticated)
    const resposta = await ListPublicRoomsService();
    res.render('telaSalasDeBingos', {
        salas: resposta.rooms
    });
}

module.exports = ListPublicRoomsController;