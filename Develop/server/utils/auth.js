const jwt = require('jsonwebtoken');
const { User } = require('../models');

const authMiddleware = async ({ req }) => {
  let token = req.headers.authorization || '';

  if (token) {
    try {
      token = token.split(' ').pop().trim();
      const { data } = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(data._id);
      return { user };
    } catch {
      console.error('Invalid token');
    }
  }

  return {};
};

module.exports = { authMiddleware };
