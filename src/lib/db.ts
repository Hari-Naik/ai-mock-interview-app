import mongoose, { MongooseError } from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("Database connected successfully.");
  } catch (error) {
    if (error instanceof MongooseError) {
      console.log(error.message);
    }
  }
}
