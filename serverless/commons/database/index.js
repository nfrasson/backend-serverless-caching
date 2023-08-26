const { CourseModel, CourseSchema } = require("./models/Course");

module.exports = {
  databaseConnection: require("./connect"),
  CourseModel,
  CourseSchema,
};
