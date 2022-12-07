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

module.exports = {
  validaLogin,
};