const crypto = require("node:crypto");
const { CourseModel } = require("commons/database");

module.exports.handler = async (event) => {
  const Course = await CourseModel();
  const course = await Course.create({
    courseID: crypto.randomUUID(),
    courseTitle: "Curso de NodeJS",
    courseDescription: "Estratégias de Cache em um ambiente serverless",
  });

  return {
    statusCode: 201,
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
