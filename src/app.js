const express = require('express');
const userController = require('./controllers/user.controller');
const {
  validaLogin, validaUser,
} = require('./middlewares/middlewares');

// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', validaLogin, userController.getLogin);
app.post('/user', validaUser, userController.criarUsuario);
// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
