const { Router } = require('express');
const router = Router();
const verifyToken = require('./middlewares/verifyToken');

const CreateUserController = require('./controllers/CreateUserController');
const ListUsersController = require('./controllers/ListUsersController');
// const UpdateAvatarController = require('./controllers/UpdateAvatarController');
const AuthenticateUserController = require('./controllers/AuthenticateUserController');
const AuthenticateGuestController = require('./controllers/AuthenticateGuestController');
const ListPublicRoomsController = require('./controllers/ListPublicRoomsController');
// const DeleteUserController = require('./controllers/DeleteUserController');
// const AddVictoriesController = require('./controllers/AddVictoriesController');
// const EditUserController = require('./controllers/EditUserController');
// const RemoveCoinsController = require('./controllers/RemoveCoinsController');
const CreateRoomController = require('./controllers/CreateRoomController');
const redirectLogin = require('./middlewares/redirectLogin');
// const ListPublicRoomsController = require('./controllers/ListPublicRoomsController');
// const RankingController = require('./controllers/RankingController');
const EnterRoomController = require('./controllers/EnterRoomController');
const CreateCartelaController = require('./controllers/CreateCartelaController');
const VerifyRoomService = require('./services/rooms/VerifyRoomService');
const CreateRoomPageController = require('./controllers/CreateRoomPageController');
// const DeleteRoomController = require('./controllers/DeleteRoomController');

// router.get('/', (req, res) => {
//     res.render('telaLogin')//redirensionar pra um ejs
// })
router.get('/login', redirectLogin, (req, res) => {
    res.render('telaLogin');
});

router.get('/api/users', ListUsersController);
router.post('/api/verifyRoom', async (req, res) => {
    const { code } = req.body;
    const response = await VerifyRoomService(code);

    res.json(response);
});

router.post('/api/register', CreateUserController);
router.post('/api/authentication', AuthenticateUserController);
router.get('/api/authenticationGuest', AuthenticateGuestController);
router.post('/api/create/cartela', verifyToken, CreateCartelaController);
router.get('/', verifyToken, ListPublicRoomsController);
router.get('/create', verifyToken, CreateRoomPageController);
// router.put('/edit/avatar/:id', UpdateAvatarController);
// router.delete('/delete//user/:id', DeleteUserController);
// router.delete('/delete/room/:id', DeleteRoomController);
// router.get('/victory/:id', AddVictoriesController);
// router.put('/edit/user/:id', EditUserController);
// router.put('/remove/coins/:id', RemoveCoinsController);
// router.post('/create/room', CreateRoomController);
router.get('/room/:code', verifyToken, EnterRoomController);
// router.get('/rooms', ListPublicRoomsController);
// router.get('/ranking', RankingController);

// router.get('/profile/:user', userController.profile)
// router.delete('/profile/:user', userController.delete)


// router.post('/create-room', roomsController.create)

// router.get('/created-room', roomsController.createdRoom)

// router.get('/enter-room', roomsController.enterRoom)
// router.post('/enter-room', roomsController.enterRoom)

// router.post('/room/:room-id', roomsController.enterRoom)


// router.get('/bingo/:bingo-id', bingoController.bingoMatch)

module.exports = router;