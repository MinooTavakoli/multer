import mongoose from "mongoose";

async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return;

    await mongoose.connect(
      "mongodb+srv://minootavakoli28:exCkS0YBao0Tz9S5@cluster0.hrndbnr.mongodb.net/?retryWrites=true&w=majority"
    );
  } catch (err) {
    console.log("faild...!");
  }
}

export default connectDB;
