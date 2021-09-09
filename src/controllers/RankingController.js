const RankingService = require("../services/users/RankingService");
const GetUserService = require("../services/users/GetUserService");


async function RankingController(req, res) {

    

    const { userAuthenticated } = req.body;
    let user;
    if(userAuthenticated.username){
        user = userAuthenticated
    }else{
        user = await GetUserService(userAuthenticated.user_id);
    }

    const ranking = await RankingService();  
    res.render('ranking', {
        user: {
            id: userAuthenticated.username ? userAuthenticated.user_id : user.id,
            ...user
        }, 
        ranking
        
    });

}

module.exports = RankingController;