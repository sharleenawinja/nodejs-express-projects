const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const getSingleTask = (req, res) => {
  res.send("get single task");
};

const createTask = (req, res) => {
  //   res.json(req.body);
  res.send("create task");
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
