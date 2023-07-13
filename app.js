require("dotenv").config();


//database
const connectDB = require("./db/connect");

// express
const express = require("express");
const app = express();
const routes = require("./routes/blogRoutes");
//port
const port = process.env.PORT || 5000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//route middleware
app.use("/", routes)


const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log("App is listening on port " + port);
    });
  } catch (error) {
    console.log("there is error on the server port " + error);
  }
};

start();
