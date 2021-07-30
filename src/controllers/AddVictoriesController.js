const AddVictoriesService = require("../services/AddVictoriesService");


async function AddVictoriesController(req, res) {
    const { id } = req.params;
    await AddVictoriesService(id)

    res.json({
        message: "Adicionada nova vitória"
    });
}

module.exports = AddVictoriesController;