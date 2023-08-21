const { CourseModel, CourseSchema } = require("./models/Course");

module.exports = {
  databaseConnect: require("./connect"),
  CourseModel,
  CourseSchema,
};
