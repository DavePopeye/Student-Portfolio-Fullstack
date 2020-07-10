const express = require("express");
const StudentSchema = require("./schema");
const query2mongo = require("query-to-mongo");
const studentsRouter = express.Router();

studentsRouter.get("/", async (req, res, next) => {
  try {
    const students = await StudentSchema.find(req.query);
    const total = await StudentSchema.countDocuments();

    res.send({
      students: students,
      total: total, //numero di documenti / userrs /
    });
  } catch (error) {
    next(error);
  }
});

studentsRouter.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await StudentSchema.findById(id);
    if (user) {
      res.send(user);
    } else {
      const error = new Error();
      error.httpStatusCode = 404;
      next(error);
    }
  } catch (error) {
    console.log(error);
    next("While reading users list a problem occurred!");
  }
});

studentsRouter.post("/", async (req, res, next) => {
  try {
    const newStudent = new StudentSchema(req.body);
    const { _id } = await newStudent.save();

    res.status(201).send(_id);
  } catch (error) {
    next(error);
  }
});

studentsRouter.put("/:id", async (req, res, next) => {
  try {
    const user = await StudentSchema.findByIdAndUpdate(req.params.id, req.body);
    console.log(user);
    if (user) {
      res.send("Ok");
    } else {
      const error = new Error(`User with id ${req.params.id} not found`);
      error.httpStatusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

studentsRouter.delete("/:id", async (req, res, next) => {
  try {
    const user = await StudentSchema.findByIdAndDelete(req.params.id);
    if (user) {
      res.send("Deleted");
    } else {
      const error = new Error(`User with id ${req.params.id} not found`);
      error.httpStatusCode = 404;
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = studentsRouter;
