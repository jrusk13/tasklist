const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const taskList = "/workspaces/tasklist/data/tasklist.json";

class TaskModel {
  constructor(client, task, id = uuidv4()) {
    this.id = id;
    this.client = client;
    this.task = task;
  }

  static getTasks() {
    return JSON.parse(fs.readFileSync(taskList, "utf-8"));
  }

  addTask() {
    let tasks = TaskModel.getTasks();
    tasks.push({ id: this.id, client: this.client, task: this.task });
    fs.writeFileSync(taskList, JSON.stringify(tasks, null, 2));
  }

  static deleteTask(id) {
    let tasks = TaskModel.getTasks();
    let index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      console.log(`Task with id of ${id} not found.`);
      return;
    }

    try {
      console.log(index);
      tasks.splice(index, 1);
      fs.writeFileSync(taskList, JSON.stringify(tasks, null, 2));
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TaskModel;
