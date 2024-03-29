const { CourseModel } = require("serverless/commons/database");

module.exports.handler = async () => {
  const course = await CourseModel.find({});

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
