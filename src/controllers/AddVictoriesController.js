const AddVictoriesService = require("../services/AddVictoriesService");


async function AddVictoriesController(req, res) {
    const { id } = req.params;
    const { coins } = req.body;
    await AddVictoriesService(id, coins);

    res.json({
        message: "Adicionada nova vitória"
    });
}

module.exports = AddVictoriesController;