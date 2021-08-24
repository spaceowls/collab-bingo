const RankingService = require("../services/RankingService");

async function RankingController(req, res) {
    const ranking = await RankingService();
    res.json(ranking);
}

module.exports = RankingController;