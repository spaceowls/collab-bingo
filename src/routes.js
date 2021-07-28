const { Router } = require('express');
const router = Router();

router.get('/login', userController.login)
router.post('/login', userController.login)

router.get('/register', userController.register)
router.post('/register', userController.register)

router.get('/profile/:user', userController.profile)
router.put('/profile/edit/:user', userController.editProfile)

router.get('/rooms', roomsController.listRooms)

router.get('/create-room', roomsController.create)
router.post('/create-room', roomsController.create)

router.get('/created-room', roomsController.createdRoom)

router.get('/enter-room', roomsController.enterRoom)
router.post('/enter-room', roomsController.enterRoom)

router.post('/room/:room-id', roomsController.enterRoom)

router.get('/ranking', rankingController.listRanking)

router.get('/bingo/:bingo-id', bingoController.bingoMatch)

module.exports = router;
