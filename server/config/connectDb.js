const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL="mongodb+srv://dbUser:54900777@databasemerbappliation.pmjh4.mongodb.net/?retryWrites=true&w=majority"
const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("db is sucessfully connected");
  } catch (error) {
    console.log("db is failed");
  }
};
module.exports = connectDb;
