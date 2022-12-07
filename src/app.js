const express = require('express');
const userController = require('./controllers/user.controller');
const {
  validaLogin,
} = require('./middlewares/middlewares');

// ...

const app = express();

app.use(express.json());

// ...
app.post('/login', validaLogin, userController.getLogin);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
