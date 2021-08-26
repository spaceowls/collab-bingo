const EnterRoomService = require("../services/rooms/EnterRoomService");
const GetUserService = require("../services/users/GetUserService");

async function EnterRoomController(req, res) {
    const { code } = req.params;
    const { userAuthenticated } = req.body;
    let user;

    if(userAuthenticated.username){
        user = userAuthenticated
    }else{
        user = await GetUserService(userAuthenticated.user_id);
    }

    const room = await EnterRoomService(code);

    res.render('salaDeEspera', {
        user: {
            id: userAuthenticated.username ? userAuthenticated.user_id : user.id,
            ...user
        },
        sala: room.room
    });
}

module.exports = EnterRoomController;