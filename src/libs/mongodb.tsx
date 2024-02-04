import mongoose from "mongoose";

const connectMongoDB = async () => {

  try {
    await mongoose.connect("mongodb+srv://singhrahul2:singhrahul2@cluster0.fzy1ezu.mongodb.net/blogAppDB");

    console.log("Connected to MongoDB.");
    
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
