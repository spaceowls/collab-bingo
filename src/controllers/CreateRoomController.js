const CreateRoomService = require("../services/CreateRoomService");

async function CreateRoomController(req, res) {
    const { user_id, name, premiacao, private } = req.body;
    const data = await CreateRoomService(user_id, name, premiacao, private);

    res.json(data);
}

module.exports = CreateRoomController;