const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const connectDb = require('./server/config/mongoose.config');
connectDb();

const cors = require('cors');
app.use(express.json(), cors());

const recordRouter = require('./server/routes/record.routes');
app.use('/api/records', recordRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
