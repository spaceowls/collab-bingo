const { Router } = require('express');
const router = Router();

/* Import Middlewares */
const verifyToken = require('./middlewares/verifyToken');
const redirectLogin = require('./middlewares/redirectLogin');

/* Import Controllers */
const CreateUserController = require('./controllers/CreateUserController');
const ListUsersController = require('./controllers/ListUsersController');
const AuthenticateUserController = require('./controllers/AuthenticateUserController');
const AuthenticateGuestController = require('./controllers/AuthenticateGuestController');

const CreateRoomController = require('./controllers/CreateRoomController');
const EnterRoomController = require('./controllers/EnterRoomController');
const LeaveRoomController = require('./controllers/LeaveRoomController');
const ListPublicRoomsController = require('./controllers/ListPublicRoomsController');
const CreateRoomPageController = require('./controllers/CreateRoomPageController');
const CreatedRoomController = require('./controllers/CreatedRoomController');
const DeleteRoomController = require('./controllers/DeleteRoomController');

const CreateCartelaController = require('./controllers/CreateCartelaController');
const GetCartelasController = require('./controllers/GetCartelasController');

const RankingController = require('./controllers/RankingController');


/* Import Services */
const VerifyRoomService = require('./services/rooms/VerifyRoomService');

/* Call API */ 
router.post('/api/create/sala', CreateRoomController);
router.post('/api/create/cartela', CreateCartelaController);
router.post('/api/register', CreateUserController);
router.get('/api/users', ListUsersController);
router.post('/api/authentication', AuthenticateUserController);
router.get('/api/authenticationGuest', AuthenticateGuestController);

router.post('/api/create/:code', CreateRoomController);
router.post('/api/verifyRoom', async (req, res) => {
    const { code } = req.body;
    const response = await VerifyRoomService(code);
    
    res.json(response);
});
router.post('/api/leave-room', LeaveRoomController)



/*=== Pages ===*/

/* Login */ 
router.get('/login', redirectLogin, (req, res) => {
    res.render('telaLogin');
});
router.get('/sign-in', (req, res) => {
    res.render('telaCadastro')
});
router.post('/sign-in', CreateUserController);

/* Home */
router.get('/', verifyToken, ListPublicRoomsController);

/* Rooms */
router.get('/create', verifyToken, CreateRoomPageController);
router.get('/room/sucesso/:code', verifyToken, CreatedRoomController);
router.get('/room/:code', verifyToken, EnterRoomController);
router.delete('/room/delete/:id', DeleteRoomController);

router.get('/register', (req, res) => {
    res.render('telaCriarConta')
});
/* Cartelas */
router.get('/cartela/:user_id', verifyToken, GetCartelasController);

/* Test routes */
router.get('/modalPerdedor', (req, res) => {
    res.render('modalPerdedor')
});
router.get('/modalVencedor', (req, res) => {
    res.render('modalVencedor')
});

/* ranking */
router.get('/ranking', verifyToken, RankingController);


router.get('/pedrasUsers', (req,res) => {
    res.render('telaPedrasUsers')
})




module.exports = router;