import express from 'express';
const app = express();

import dotenv from 'dotenv';
dotenv.config();

import colors from 'colors';
colors.enable();

import connectDb from './config/mongoose.config.js';
connectDb();

// MIDDLEWARE
// parse json post requests
// handle cross origin requests
// parse cookies from requests
import cors from 'cors';
import cookieParser from 'cookie-parser';
app.use(express.json(), cors(), cookieParser());

// bring in user routes
import userRouter from './routes/user.routes.js';
app.use('/api/users', userRouter);

const port = process.env.PORT || 8000;
app.listen(port, () =>
  console.log(colors.cyan(`LISTENING ON PORT ${port}`))
);
