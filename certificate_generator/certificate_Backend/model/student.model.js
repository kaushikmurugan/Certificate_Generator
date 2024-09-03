const mongoose = require("mongoose");
const { v4 } = require("uuid");

const studentSchema = mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    name: {
      type: String,
      required: true,
    },
    course_name: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },
    certificate_no: {
      type: String,
      required: true,
    },
    mobile_no: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("studentData", studentSchema);

module.exports = {
  Student,
};
