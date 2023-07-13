const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1";

const connectDB = () => {
  const db = mongoose
    .connect(uri, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("connected to database");
    })
    .catch((error) => {
      console.log("error connecting to database" + error);
    });

  return db;
};

module.exports = connectDB;
