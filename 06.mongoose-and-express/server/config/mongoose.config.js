const mongoose = require('mongoose');
const colors = require('colors');
colors.enable();

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      console.log(
        colors.rainbow(
          `CONNECTION ESTABLISHED AT HOST: ${mongoose.connection.host}`
        )
      )
    );
};

module.exports = connectDb;