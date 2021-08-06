const DeleteRoomService = require("../services/DeleteRoomService");

async function DeleteRoomController(req, res) { 
    const { id } = req.params;
    const room = await DeleteRoomService(id);
    res.json(room);
}

module.exports = DeleteRoomController;