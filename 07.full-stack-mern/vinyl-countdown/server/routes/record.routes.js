const express = require('express');
const recordRouter = express.Router();
const { hello } = require('../controllers/record.controller');

recordRouter.get('/hello', hello);

module.exports = recordRouter;