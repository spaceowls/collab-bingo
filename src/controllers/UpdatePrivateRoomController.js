const UpdatePrivateRoomService = require('../services/rooms/UpdatePriveRoomService');

async function UpdatePrivateRoomController(req, res) {
    const { code } = req.body;
    const update = await UpdatePrivateRoomService(code);
    res.json(update);
}

module.exports = UpdatePrivateRoomController;