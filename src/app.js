const express = require('express');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const {
  validaLogin, validaUser, validaToken, validaCategoria,
} = require('./middlewares/middlewares');

const app = express();

app.use(express.json());

// ...validaToken
app.post('/login', validaLogin, userController.getLogin);
app.post('/user', validaUser, userController.criarUsuario);
app.get('/user/:id', validaToken, userController.getUserById);
app.get('/user', validaToken, userController.pegarTodosUsuarios);

app.post('/categories', validaToken, validaCategoria, categoryController.criarCategoria);
app.get('/categories', validaToken, categoryController.todasCategorias);

module.exports = app;
