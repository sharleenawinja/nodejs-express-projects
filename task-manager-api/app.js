const express = require("express");
const tasks = require("./routes/tasks");

const app = express();

// using middleware built into express to get and send json data
app.use(express.json()); // this helps us get data in the request body

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 5000;

app.listen(port, console.log(`server is listening on port ${port}...`));
