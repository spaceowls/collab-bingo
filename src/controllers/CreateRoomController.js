const CreateRoomService = require("../services/CreateRoomService");

async function CreateRoomController(req, res) {
    const { user_id, name, password, max_members, premiacao, private } = req.body;
    const data = await CreateRoomService(user_id, name, password, premiacao, private, max_members);

    res.json(data);
}

module.exports = CreateRoomController;