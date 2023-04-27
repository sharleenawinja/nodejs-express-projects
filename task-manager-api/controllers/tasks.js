const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); //using the find static function and passing an empty object to get all the documents in the collection
    res.status(200).json({ tasks }); //if property name is the same as the variable name for the value then you can omit the value name...but you could still use this other syntax {tasks: tasks}
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = (req, res) => {
  res.send("get single task");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body); //when you have an asynchronous function always do error handling eg with a try catch block
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
