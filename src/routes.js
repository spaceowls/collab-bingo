const { Router } = require('express');
const router = Router();

const CreateUserController = require('./controllers/CreateUserController');
const ListUsersController = require('./controllers/ListUsersController');
const UpdateAvatarController = require('./controllers/UpdateAvatarController');
const AuthenticateUserController = require('./controllers/AuthenticateUserController');
const DeleteUserController = require('./controllers/DeleteUserController');
const AddVictoriesController = require('./controllers/AddVictoriesController');
const EditUserController = require('./controllers/EditUserController');
const RemoveCoinsController = require('./controllers/RemoveCoinsController');
const CreateRoomController = require('./controllers/CreateRoomController');
const ListPublicRoomsController = require('./controllers/ListPublicRoomsController');
const RankingController = require('./controllers/RankingController');

router.get('/users', ListUsersController);
router.post('/register', CreateUserController);
router.post('/login', AuthenticateUserController);
router.put('/edit/avatar/:id', UpdateAvatarController);
router.delete('/delete/:id', DeleteUserController);
router.get('/victory/:id', AddVictoriesController);
router.put('/edit/user/:id', EditUserController);
router.put('/remove/coins/:id', RemoveCoinsController);
router.post('/create/room', CreateRoomController);
router.get('/rooms', ListPublicRoomsController);
router.get('/ranking', RankingController)

// router.get('/profile/:user', userController.profile)
// router.delete('/profile/:user', userController.delete)


// router.post('/create-room', roomsController.create)

// router.get('/created-room', roomsController.createdRoom)

// router.get('/enter-room', roomsController.enterRoom)
// router.post('/enter-room', roomsController.enterRoom)

// router.post('/room/:room-id', roomsController.enterRoom)


// router.get('/bingo/:bingo-id', bingoController.bingoMatch)

module.exports = router;