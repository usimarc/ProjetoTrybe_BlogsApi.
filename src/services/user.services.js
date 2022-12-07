const { User } = require('../models');

const getLogin = async (email) => {  
  const emailExiste = await User.findOne({ where: { email } });
  return emailExiste;
};

const criaUsuario = async (usuario) => {  
  await User.create(usuario);
};

module.exports = {
  getLogin,
  criaUsuario,
};