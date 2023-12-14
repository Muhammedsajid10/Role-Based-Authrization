const jwt = require('jsonwebtoken');

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1];
    console.log('Token in authRequire:', token);

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Data in authRequire:', decode);

    req.user = decode;
    next();
  } catch (err) {
    res.status(403).send('Invalid token');
  }
};

const checkRole = (Role) => {
  return (req, res, next) => {
    if (req.user && req.user.Role === Role) {
      next();
    } else {
      res.status(403).send('Access denied');
    }
  };
};

module.exports = { authenticateToken, checkRole };
