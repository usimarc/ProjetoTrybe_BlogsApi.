const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'senha';

const jwtConfig = {
  expiresIn: '50min',
  algorithm: 'HS256',
};

const criarToken = (user) => {
  const token = jwt.sign(user, secret, jwtConfig);

  return token;
};

const verificaToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
};

// { isError: true, error }
module.exports = {
  criarToken,
  verificaToken,
};