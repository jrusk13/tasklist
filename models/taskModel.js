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

  static taskFile = "/workspaces/tasklist/data/tasklist.json";

  static readTaskFile() {
    try {
      return JSON.parse(fs.readFileSync(this.taskFile, "utf-8"));
    } catch (error) {
      console.log("Error reading task file.");
    }
  }

  static writeTaskFile(tasks) {
    fs.writeFileSync(taskList, JSON.stringify(tasks));
  }

  addTask() {
    let tasks = TaskModel.readTaskFile();
    tasks.push({
      id: this.id,
      client: this.client,
      task: this.task,
    });
    TaskModel.writeTaskFile(tasks);
  }

  static deleteTask(id) {
    let tasks = this.readTaskFile();
    let index = tasks.findIndex((task) => task.id === id);

    if (index === -1) {
      console.log(`Task with id of ${id} not found.`);
      return;
    }

    try {
      tasks.splice(index, 1);
      this.writeTaskFile(tasks);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TaskModel;
