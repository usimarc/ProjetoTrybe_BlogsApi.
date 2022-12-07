// // const jwtConfig = require('../auth/jwtConfig');
// require('dotenv').config();

// const secret = process.env.JWT_SECRET || 'segredoDoXablau';

const validaLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email.length || !password.length) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

const validaUser = async (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
  });
  }
  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  const emailUsuario = /^([a-z\d-]+)@([a-z\d-]+)\.com$/;
  if (!emailUsuario.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = {
  validaLogin,
  validaUser,
};