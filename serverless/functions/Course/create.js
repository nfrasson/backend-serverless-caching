const crypto = require("node:crypto");
const { CourseModel } = require("serverless/commons/database");
const { invalidateAPIGatewayCache } = require("serverless/events/Course/invalidateCache");

module.exports.handler = async () => {
  const course = await CourseModel.create({
    courseID: crypto.randomUUID(),
    courseTitle: "Curso de Nodejs",
    courseDescription: "Estratégias de Cache em um ambiente serverless",
  });

  await invalidateAPIGatewayCache();

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
