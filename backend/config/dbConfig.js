// db.js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: cluster: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1); // crash fast
  }
};

export default connectDB;