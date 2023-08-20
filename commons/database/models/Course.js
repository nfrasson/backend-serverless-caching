const mongoose = require("mongoose");
const connectDatabase = require("../connect");

let CourseModel = null;

module.exports = async () => {
  if (CourseModel) return CourseModel;

  const Course = new mongoose.Schema(
    {
      courseID: { type: String, unique: true, index: true },
      courseTitle: String,
      courseDescription: String,
      deletedAt: Date,
      createdAt: Date,
    },
    {
      timestamps: true,
    }
  );

  CourseModel = await connectDatabase({ name: "Course", schema: Course });

  return CourseModel.model("Course");
};
