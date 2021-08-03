const EditUserService = require("../services/EditUserService");


async function EditUserController(req, res) {
    const { id } = req.params;
    const { username, old_password, new_password } = req.body;
    const data = await EditUserService(id, username, old_password, new_password);

    res.json(data);
}

module.exports = EditUserController;