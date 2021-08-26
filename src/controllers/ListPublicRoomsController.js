const ListPublicRoomsService = require("../services/rooms/ListPublicRoomsService");
const GetUserService = require("../services/users/GetUserService");

async function ListPublicRoomsController(req, res) {
    const { userAuthenticated } = req.body;
    let user;
    if(userAuthenticated.username){
        user = userAuthenticated
    }else{
        user = await GetUserService(userAuthenticated.user_id);
    }
    
    const resposta = await ListPublicRoomsService();
    res.render('telaSalasDeBingos', {
        user,
        salas: resposta.rooms
    });
}

module.exports = ListPublicRoomsController;