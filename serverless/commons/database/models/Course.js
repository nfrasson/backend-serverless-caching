const mongoose = require("mongoose");
const databaseConnection = require("../connect");

const CourseSchema = new mongoose.Schema(
  {
    courseID: { type: String, unique: true, index: true },
      courseTitle: String,
      courseDescription: String,
      deletedAt: Date,
      createdAt: Date,
  },
  {
    collection: "course",
    minimize: false,
    strict: true,
    useNestedStrict: true,
    timestamps: {
      createdAt: "courseCreatedAt",
      updatedAt: "courseUpdatedAt",
    },
  }
);

const CourseModel = databaseConnection({ name: "Course", schema: CourseSchema });

module.exports = { CourseModel, CourseSchema };
