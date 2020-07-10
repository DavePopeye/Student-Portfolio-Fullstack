const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ProjectsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  repoURL: {
    type: String,
    required: true,
    lowercase: true,
  },
  liveURL: {
    type: String,
    required: true,
    lowercase: true,
  },
});

ProjectsSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    error.httpStatusCode = 400;
    next(error);
  } else {
    next();
  }
});

const ProjectModel = mongoose.model("Projects", ProjectsSchema);

module.exports = ProjectModel;
