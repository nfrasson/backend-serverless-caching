const { CourseModel } = require("commons/database");

module.exports.handler = async (event) => {
  const Course = await CourseModel();
  const course = await Course.find({});

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        status: true,
        course,
      },
      null,
      2
    ),
  };
};
