const { User } = require('../models');

const getLogin = async (email) => {  
  const emailExiste = await User.findOne({ where: { email } });
  return emailExiste;
};

module.exports = {
  getLogin,
};