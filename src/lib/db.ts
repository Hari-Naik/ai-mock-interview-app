import mongoose, { MongooseError } from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
  } catch (error) {
    if (error instanceof MongooseError) {
      throw new Error(error.message);
    }
    throw error;
  }
}
