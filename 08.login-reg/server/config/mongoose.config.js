import mongoose from 'mongoose';
import colors from 'colors';
colors.enable();

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(
      console.log(
        colors.yellow(
          `DB CONNECTION ESTABLISHED`
        )
      )
    );
};

export default connectDb;
