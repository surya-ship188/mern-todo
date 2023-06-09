const mongoose = require("mongoose");
require("dotenv").config();

const mongoPath = process.env.MONGODB_URI;

module.exports = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb+srv://myntra:myntra@development.ut944rk.mongodb.net/surya", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose;
};
