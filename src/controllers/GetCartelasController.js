const GetCartelaService = require('../services/cartelas/GetCartelaService');

async function GetCartelas(req, res) {
    const { user_id } = req.params;
    const { userAuthenticated } = req.body;
    const response = await GetCartelaService(user_id);

    let user;
    if(userAuthenticated.username){
        user = userAuthenticated
    }else{
        user = await GetUserService(userAuthenticated.user_id);
    }

  res.render('telaBingo', {
    user: {
        id: userAuthenticated.username ? userAuthenticated.user_id : user.id,
        ...user
    },
      cartela: response.cartela ? response.cartela : response.status
  });
}

module.exports = GetCartelas;