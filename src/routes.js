const { Router } = require('express');
const router = Router();
const knex = require('./database');

const CreateUserController = require('./controllers/CreateUserController');
const ListUsersController = require('./controllers/ListUsersController');
const UpdateAvatarController = require('./controllers/UpdateAvatarController');
const AuthenticateUserController = require('./controllers/AuthenticateUserController');
const DeleteUserController = require('./controllers/DeleteUserController');
const AddVictoriesController = require('./controllers/AddVictoriesController');

router.get('/users', ListUsersController);
router.post('/register', CreateUserController);
router.post('/login', AuthenticateUserController);
router.put('/edit/avatar/:id', UpdateAvatarController);
router.delete('/delete/:id', DeleteUserController);
router.get('/victories/:id', AddVictoriesController);

// router.get('/profile/:user', userController.profile)
// router.delete('/profile/:user', userController.delete)

// router.get('/rooms', roomsController.listRooms)

// router.get('/create-room', roomsController.create)
// router.post('/create-room', roomsController.create)

// router.get('/created-room', roomsController.createdRoom)

// router.get('/enter-room', roomsController.enterRoom)
// router.post('/enter-room', roomsController.enterRoom)

// router.post('/room/:room-id', roomsController.enterRoom)

// router.get('/ranking', rankingController.listRanking)

// router.get('/bingo/:bingo-id', bingoController.bingoMatch)



module.exports = {
    async login(req, res) {
        const results = await knex('users')

        return res.json(results)
    }
}

module.exports = router;