const express = require('express');
const app = express();

app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

const colors = require('colors');
colors.enable();

const connectDb = require('./server/config/mongoose.config');
connectDb();

const heroRouter = require('./server/routes/heroes.routes');
app.use('/api/heroes', heroRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(colors.rainbow(`listening on port: ${PORT}`))
);
