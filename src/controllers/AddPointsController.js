const AddPointsService = require('../services/users/AddPointsService');

async function AddPointsController(req, res) {
    const { id } = req.body;
    await AddPointsService(id);
}

module.exports = AddPointsController;