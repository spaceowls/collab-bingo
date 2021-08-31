const CreateRoomService = require("../services/rooms/CreateRoomService");

async function CreateRoomController(req, res) {
    const { user_id, name, private, max_members } = req.body;
    const data = await CreateRoomService(user_id, name, private, max_members);
    res.status(data.status).json(data);
}

module.exports = CreateRoomController;