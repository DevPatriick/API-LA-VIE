const express = require('express');
const routes = require('../src/routes/index');
const app = express();
const db = require('./database/conexao')
const handlerError = require("./middlewares/handlerError.js");
const requestLog = require('./middlewares/requestLog');

try {
db.conection()
app.use(express.json());
app.use(routes);
app.use(requestLog);
app.use(handlerError);
app.listen(3000, () => {
     console.log('Servidor conectado na porta 3306!');
});

} catch (error) {
    console.log('Erro ao se conectar ao servidor: ', error);
}


