const UpdateAvatarService = require('../services/UpdateAvatarService');

async function UpdateAvatarController(req, res) {
    const { id } = req.params;
    const { avatar } = req.body;
    const user = await UpdateAvatarService(id, avatar);
    res.json(user);
}

module.exports = UpdateAvatarController;