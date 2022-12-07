const userService = require('../services/user.services');
const jwtConfig = require('../middlewares/jwtconfig');
// require('dotenv').config();
// const secret = process.env.JWT_SECRET || 'maisUmSegredoDoXablau';

const getLogin = async (req, res) => {
  const { email } = req.body;
  const buscaUsuario = await userService.getLogin(email);
  if (!buscaUsuario) return res.status(400).json({ message: 'Invalid fields' });
  const token = jwtConfig.criarToken({ id: buscaUsuario.id, email });
  return res.status(200).json({ token });
};

module.exports = {
  getLogin,
};