const crypto = require("node:crypto");
const { CourseModel } = require("commons/database");
const AWS = require("aws-sdk");
const apigateway = new AWS.APIGateway();

module.exports.handler = async (event) => {
  const course = await CourseModel.create({
    courseID: crypto.randomUUID(),
    courseTitle: "Curso de NodeJS",
    courseDescription: "Estratégias de Cache em um ambiente serverless",
  });

  const params = {
    restApiId: "i6vesre39k", // Substitua pelo ID da sua API
    stageName: "dev", // Substitua pelo nome do estágio da sua API (por exemplo, 'prod')
  };
  await apigateway.flushStageCache(params).promise();

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
