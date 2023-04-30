const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); //using the find static function and passing an empty object to get all the documents in the collection
    res.status(200).json({ tasks }); //if property name is the same as the variable name for the value then you can omit the value name...but you could still use this other syntax {tasks: tasks}
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params; //getting the id and giving it an alias of taskId
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      //make sure to write return statement otherwise javascript will continue executing the code and you might end up returning 2 responses
      return res.status(404).json({ msg: `No task with id: ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body); //when you have an asynchronous function always do error handling eg with a try catch block
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskId}` });
    }
    res.status(204).json({});
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
