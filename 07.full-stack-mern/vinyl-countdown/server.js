const express = require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config();

const colors = require('colors');
colors.enable();

const cors = require('cors');
app.use(express.json(), cors());

const connectDb = require('./server/config/mongoose.config');
connectDb();

const recordRouter = require('./server/routes/record.routes');
app.use('/api/records', recordRouter);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(colors.rainbow(`Listening on port: ${server.address().port}`))
);
