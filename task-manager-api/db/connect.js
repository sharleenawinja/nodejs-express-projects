const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
};

//   if we have a function in a module where the function is executed, we only need to require the module and we'll right away execute the function

module.exports = connectDB;
