const GetUserService = require('../services/users/GetUserService');
const VerifyRoomService = require('../services/rooms/VerifyRoomService');

async function CreatedRoomController(req, res) {
  const { userAuthenticated } = req.body;
  const { code } = req.params;
  
  let user;
  if(userAuthenticated.username){
      user = userAuthenticated
    }else{
        user = await GetUserService(userAuthenticated.user_id);
    }

const room = await VerifyRoomService(code);
  res.render('salaCriadaComSucessoDono', {
      user: {
          id: userAuthenticated.username ? userAuthenticated.user_id : user.id,
          ...user
      },
      sala: room.room
  })
}



module.exports = CreatedRoomController;