const DeleteRoomService = require("../services/rooms/DeleteRoomService");

async function DeleteRoomController(req, res) { 
    const { id } = req.params;
    const room = await DeleteRoomService(id);
    res.status(room.status).json(room);
}

module.exports = DeleteRoomController;
