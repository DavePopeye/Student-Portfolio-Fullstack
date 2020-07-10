const express = require("express");
const listEndpoints = require("express-list-endpoints");
const cors = require("cors");
const studentsRoute = require("./services/students");
const projectsRoute = require("./services/projects");
const mongoose = require("mongoose");

const server = express();
const port = process.env.PORT || 3001;
server.use(cors());

//Errors Handlers

const {
  badRequestHandler,
  notFoundHandler,
  genericErrorHandler,
} = require("./errorhandlers");

//Middlewares

server.use(express.json());

//Routes

server.use("/students", studentsRoute);
server.use("/projects", projectsRoute);

// Error Handlers

server.use(badRequestHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

console.log(listEndpoints(server));

mongoose
  .connect("mongodb://localhost:27017/strivestudents", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    server.listen(port, () => {
      console.log("Running on port", port);
    })
  )
  .catch((err) => console.log(err));
