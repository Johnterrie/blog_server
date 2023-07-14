const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  "";

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
