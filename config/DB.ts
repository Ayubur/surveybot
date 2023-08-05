import * as mongoose from "mongoose"

const connectDB = async () => {
  console.log({conn : process.env.MONGO_URI!})
  try {
    if (mongoose.connection.readyState !== 1) {
      mongoose.set('strictQuery', true);
      const conn = await mongoose.connect(process.env.MONGO_URI!);
      console.log(`MongoDB Connected: ${conn.connection.host}`);

      return conn;
    }

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

export default connectDB;