const jwt = require('jsonwebtoken');

const middleWare = async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      res.status(401).send({message: 'Login invalid'});
      return;
    }
    res.locals.userId = decoded.data._id;
    next();
  });
};

module.exports = middleWare;
