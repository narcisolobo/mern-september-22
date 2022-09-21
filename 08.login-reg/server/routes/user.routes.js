import express from 'express'
const userRouter = express.Router();
import authenticate from '../middleware/auth.js';

import {
  getAllUsers,
  register,
  login,
  logout,
  getMe,
} from '../controllers/user.controller.js';

userRouter.get('/', authenticate, getAllUsers);
userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.get('/logout', logout);
userRouter.get('/me', authenticate, getMe);

export default userRouter;