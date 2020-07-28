const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const HomeSchema = new Schema({
  img: {
    data: Buffer,
    type: String,
    required: true,
  },
});

HomeSchema.post("validate", function (error, doc, next) {
  if (error) {
    error.httpStatusCode = 400;
    next(error);
  } else {
    next();
  }
});

HomeSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    error.httpStatusCode = 400;
    next(error);
  } else {
    next();
  }
});

const HomeModel = mongoose.model("Home", HomeSchema);

module.exports = HomeModel;
