let express = require("express");
let TaskModel = require("../models/taskModel");

class TaskController {
  static renderAllTasks(req, res) {
    let tasks = TaskModel.getTasks();
    res.render("home", { tasks });
  }
}

module.exports = TaskController;
