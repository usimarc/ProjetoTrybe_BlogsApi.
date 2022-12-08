const userService = require('../services/user.services');
const jwtConfig = require('../middlewares/jwtconfig');
// require('dotenv').config();
// const secret = process.env.JWT_SECRET || 'maisUmSegredoDoXablau';

const pegarTodosUsuarios = async (_req, res) => {
  const buscaUsuario = await userService.pegarTodosUsuarios();
  return res.status(200).json(buscaUsuario);
};

const getLogin = async (req, res) => {
  const { email } = req.body;
  const buscaUsuario = await userService.getLogin(email);
  if (!buscaUsuario) return res.status(400).json({ message: 'Invalid fields' });
  const token = jwtConfig.criarToken({ id: buscaUsuario.id, email });
  return res.status(200).json({ token });
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const criarUsuario = async (req, res) => {
  const { email, displayName, password, image } = req.body;
  const buscaUsuario = await userService.getLogin(email);
  if (buscaUsuario) return res.status(409).json({ message: 'User already registered' });
  await userService.criaUsuario({ email, displayName, password, image });
  const novoUsuario = await userService.getLogin(email);
  const token = jwtConfig.criarToken({ id: novoUsuario.id, email });
  return res.status(201).json({ token });
};

module.exports = {
  getLogin,
  criarUsuario,
  pegarTodosUsuarios,
  getUserById,
  
};