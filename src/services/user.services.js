const { User } = require('../models');

const pegarTodosUsuarios = async () => {  
  const usuarios = await User.findAll({ attributes: { exclude: ['password'] } });
  return usuarios;
}; 

const getLogin = async (email) => {  
  const emailExiste = await User.findOne({ where: { email } });
  return emailExiste;
};

const criaUsuario = async (usuario) => {  
  await User.create(usuario);
};

const getUserById = async (id) => {  
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  return user;
};

module.exports = {
  getLogin,
  criaUsuario,
  pegarTodosUsuarios,
  getUserById,
  
};