const express = require("express");
const ProjectsSchema = require("./schema");
const StudentSchema = require("../students/schema");
const projectsRouter = express.Router();

projectsRouter.get("/", async (req, res, next) => {
  try {
    const projects = await ProjectsSchema.find(req.query).populate("student");
    res.send(projects);
  } catch (error) {
    next(error);
  }
});

projectsRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const projects = await ProjectsSchema.findById(id);
    if (projects) {
      res.send(projects);
    } else {
      const error = new Error();
      error.httpStatusCode = 404;
      next(error);
    }
  } catch (error) {
    console.log(error);
    next("A problem appear!");
  }
});

projectsRouter.post("/", async (req, res, next) => {
  try {
    const newProject = new ProjectsSchema(req.body);
    const { _id } = await newProject.save();
    await StudentSchema.findByIdAndUpdate(req.body.student, {
      $push: {
        projects: _id,
      },
    });
    res.status(201).send("Done!");
  } catch (error) {
    next(error);
  }
});

projectsRouter.put("/:id", async (req, res, next) => {
  try {
    const projects = await ProjectsSchema.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (projects) {
      res.send("Updated");
    } else {
      const error = new Error(`Project with id ${req.params.id} not found`);
      error.httpStatusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

projectsRouter.delete("/id", async (req, res, next) => {
  try {
    const projects = await ProjectsSchema.findByIdAndDelete(req.params.id);
    if (projects) {
      res.send(projects);
    } else {
      const error = new Error(`Project with id ${req.params.id} not found`);
      error.httpStatusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = projectsRouter;
