let express = require("express");
let homeRouter = express.Router();
let TaskController = require("../controllers/taskController");

homeRouter.get("/", TaskController.renderAllTasks);
homeRouter.post("/", TaskController.createTask);
homeRouter.get("/:id", TaskController.removeTask);

module.exports = homeRouter;
