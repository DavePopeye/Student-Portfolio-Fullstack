const { Schema } = require("mongoose");
const mongoose = require("mongoose");
const v = require("validator");

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  projects: [
    {
      type: Schema.Types.ObjectId,
      ref: "Projects",
    },
  ],
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: {
      validator: async (value) => {
        if (!v.isEmail(value)) {
          throw new Error("Email is invalid");
        } else {
          const checkEmail = await StudentModel.findOne({ email: value });
          if (checkEmail) {
            throw new Error("Email already existant!");
          }
        }
      },
    },
  },

  dateOfBirth: {
    type: Date,
    max: ["2020-01-01", "You must be 18+"],
    min: ["1950-01-01", "You must be 65-"],
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
});

StudentSchema.post("validate", function (error, doc, next) {
  if (error) {
    error.httpStatusCode = 400;
    next(error);
  } else {
    next();
  }
});

StudentSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoError" && error.code === 11000) {
    error.httpStatusCode = 400;
    next(error);
  } else {
    next();
  }
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
