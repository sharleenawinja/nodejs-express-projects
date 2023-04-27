const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("get all tasks");
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
