const DeleteRoomService = require("../services/rooms/DeleteRoomService");
const DeleteCartelaService = require('../services/cartelas/DeleteCartelaService')
async function DeleteRoomController(req, res) { 
    const { id } = req.params;
    const room = await DeleteCartelaService(id);
    await DeleteRoomService(id);
    res.status(room.status).json(room);
}

module.exports = DeleteRoomController;
