require("dotenv").config();
const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

const app = express();

// MIDDLEWARES

// in order to serve static files use static middleware

// using middleware built into express to get and send json data
app.use(express.json()); // this helps us get data in the request body

// routes
app.use("/api/v1/tasks", tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected...");
    // only spin up server if connection is successful
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.error("error: ", error);
  }
};

start();
