const jwt = require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

const auth = (req, res, next) => {
//   debugger;
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(' ')[1];
      let credential = jwt.verify(token, SECRET_KEY);
      req.userId = credential.id;
    } else {
      res.status(401).json({ message: 'unauthorized user' });
    }
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'unauthorized user' });
  }
};

module.exports = auth;
