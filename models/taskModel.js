const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const taskList = "/workspaces/tasklist/data/tasklist.json";

class TaskModel {
  constructor(client, task) {
    this.id = uuidv4();
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
}

module.exports = TaskModel;
