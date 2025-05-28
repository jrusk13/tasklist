const express = require("express");
const app = express();
const path = require("path");

// Import routes
const homeRouter = require("./routes/homeRoutes");

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", homeRouter);

let PORT = process.env.PORT || 5500;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
