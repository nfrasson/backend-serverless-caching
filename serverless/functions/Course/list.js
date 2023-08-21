const { CourseModel } = require("commons/database");

module.exports.handler = async (event) => {
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
