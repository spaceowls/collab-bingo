const express = require('express');
const router = require('./routes');

const app = express();
const port = 3000;

app.use(express.json())

app.use(router)

app.use((error, req, res, next) => {
    res.status(erros.status || 500)
    res.json({ error: error.message})
})


app.listen(port, () => console.log(`Server rodando na porta ${port}`));