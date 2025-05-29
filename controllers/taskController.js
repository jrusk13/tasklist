let TaskModel = require("../models/taskModel");

class TaskController {
  static renderAllTasks(req, res) {
    let tasks = TaskModel.readTaskFile();
    res.render("home", { tasks });
  }

  static createTask(req, res) {
    let [client, task] = req.body.client;
    if (client && task) {
      let newTask = new TaskModel(client, task);
      newTask.addTask();
    } else {
      console.log("Error: missing client and task");
    }
    res.redirect("/");
  }

  static removeTask(req, res) {
    let id = req.params.id;
    TaskModel.deleteTask(id);
    res.redirect("/");
  }
}

module.exports = TaskController;
