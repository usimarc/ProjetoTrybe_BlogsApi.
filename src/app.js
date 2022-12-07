const express = require('express');
const userController = require('./controllers/user.controller');
const {
  validaLogin, validaUser, validaToken,
} = require('./middlewares/middlewares');

const app = express();

app.use(express.json());

// ...validaToken
app.post('/login', validaLogin, userController.getLogin);
app.post('/user', validaUser, userController.criarUsuario);
app.get('/user', validaToken, userController.pegarTodosUsuarios);

module.exports = app;
