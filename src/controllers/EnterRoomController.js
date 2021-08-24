const EnterRoomService = require("../services/EnterRoomService");

async function EnterRoomController(req, res) {
    const { code, password } = req.body;
    const room = await EnterRoomService(code, password);

    res.json(room);
}

module.exports = EnterRoomController;