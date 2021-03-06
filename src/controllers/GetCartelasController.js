const GetCartelaService = require('../services/cartelas/GetCartelaService');
const GetRoomService = require('../services/rooms/GetRoomService');
const GetUserService = require('../services/users/GetUserService');

async function GetCartelas(req, res) {
    const { user_id } = req.params;
    const { userAuthenticated } = req.body;
    await GetCartelaService(user_id)
    .then(async (response) => {
        let user;
        if(userAuthenticated.username){
            user = userAuthenticated
        }else{
            user = await GetUserService(userAuthenticated.user_id);
        }

        const sala = await GetRoomService(response.cartela.bingo_id)

      res.render('telaBingo', {
        user: {
            id: userAuthenticated.username ? userAuthenticated.user_id : user.id,
            ...user
        },
          cartela: response.cartela ? response.cartela : response.status,
          criador: sala.room.user_id,
          sala: sala.room.id,
          sala_name: sala.room.name
      });
    })
    .catch((error) => {
      if(error) {
        res.redirect('/')
      }
    })
}

module.exports = GetCartelas;