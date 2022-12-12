require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const genToken = (data) => {
  const JWT_CONFIG = data.role === 'customer'
  ? { expiresIn: '120m', algorithm: 'HS256' }
  : { algorithm: 'HS256' };

  const token = jwt.sign({ data }, JWT_SECRET, JWT_CONFIG);
  
  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, JWT_SECRET);
  const user = decoded.data;
  return user;
};

module.exports = {
  genToken,
  verifyToken,
};