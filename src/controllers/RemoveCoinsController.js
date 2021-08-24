const RemoveCoinsService = require("../services/RemoveCoinsService");

async function RemoveCoinsController(req, res) {
    const { id } = req.params;
    const { coins } = req.body;

    const data = await RemoveCoinsService(id, coins);

    res.json(data);
}

module.exports = RemoveCoinsController;