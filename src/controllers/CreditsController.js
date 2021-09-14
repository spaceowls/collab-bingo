const GetUserService = require("../services/users/GetUserService");

async function CreditsController(req, res) {
  const { userAuthenticated } = req.body
  let user;
  if(userAuthenticated.username){
        user = userAuthenticated
  }else{
        user = await GetUserService(userAuthenticated.user_id);
  }

  res.render('telaCreditos', {
    user: {
        id: userAuthenticated.username ? userAuthenticated.user_id : user.id,
        ...user
    }
  });
}

module.exports = CreditsController