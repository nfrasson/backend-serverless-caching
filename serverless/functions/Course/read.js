const { CourseModel } = require("serverless/commons/database");

module.exports.handler = async (event) => {
  const courseID = event.pathParameters.courseID;
  const course = await CourseModel.findOne({ courseID });

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
