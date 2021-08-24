const DeleteUserService = require("../services/DeleteUserService");

async function DeleteUserController(req, res) { 
    const { id } = req.params;
    const user = await DeleteUserService(id);
    res.json(user);
}

module.exports = DeleteUserController;