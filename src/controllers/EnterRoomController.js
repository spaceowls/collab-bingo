const EnterRoomService = require("../services/EnterRoomService");

async function EnterRoomController(req, res) {
    const { code } = req.body;
    const room = await EnterRoomService(code)

    res.json(room);
}

module.exports = EnterRoomController;