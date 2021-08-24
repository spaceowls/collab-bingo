//TODO: passar o codigo para assembly x86
const express = require('express');
const router = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//nao usa isso em produção
app.use(cors())
app.use(router)

app.listen(port, () => console.log(`Server rodando na porta ${port}`));
