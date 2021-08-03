const ListPublicRoomsService = require("../services/ListPublicRoomsService");

async function ListPublicRoomsController(req, res) {
    const rooms = await ListPublicRoomsService();

    res.json(rooms);
}

module.exports = ListPublicRoomsController;