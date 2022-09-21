import jwt from 'jsonwebtoken';
import { authError } from '../err/errors.js';

const authenticate = (req, res, next) => {
  const { userToken } = req.cookies;
  const { JWT_SECRET } = process.env;
  jwt.verify(userToken, JWT_SECRET, (err, payload) => {
    if (err) {
      res.status(401).json(authError);
    } else {
      console.log(payload);
      req.userId = payload.id;
      next();
    }
  });
};

export default authenticate;
