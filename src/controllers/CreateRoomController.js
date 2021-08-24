const CreateRoomService = require("../services/rooms/CreateRoomService");

async function CreateRoomController(req, res) {
    const { user_id, name, password, max_members, premiacao, private } = req.body;
    const data = await CreateRoomService(name, private, max_members);

    res.json(data);
}

module.exports = CreateRoomController;