const AutoDeleteRoomService = require("../services/rooms/AutoDeleteRoomService");
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
    
    await AutoDeleteRoomService(userAuthenticated.user_id)
    const resposta = await ListPublicRoomsService();
    res.render('telaSalasDeBingos', {
        user: {
            id: userAuthenticated.username ? userAuthenticated.user_id : user.id,
            ...user
        },
        salas: resposta.rooms
    });
}

module.exports = ListPublicRoomsController;