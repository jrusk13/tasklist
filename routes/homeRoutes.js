let express = require("express");
let homeRouter = express.Router();
let TaskController = require("../controllers/taskController");

homeRouter.get("/", TaskController.renderAllTasks);

module.exports = homeRouter;
