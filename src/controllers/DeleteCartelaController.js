const DeleteCartelaService = require('../services/cartelas/DeleteCartelaService');

async function DeleteCartelaController(req, res) {
    const { bingo_id } = req.body;
    await DeleteCartelaService(bingo_id);
    res.json({
        message: "Deletada com sucesso!"
    });
}

module.exports = DeleteCartelaController;