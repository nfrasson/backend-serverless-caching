const {
  APIGatewayClient,
  FlushStageCacheCommand,
} = require("@aws-sdk/client-api-gateway");

const client = new APIGatewayClient({ region: process.env.REGION });

module.exports.invalidateAPIGatewayCache = async () => {
  try {
    const params = {
      restApiId: process.env.API_GATEWAY_ID,
      stageName: process.env.STAGE,
    };
    const command = new FlushStageCacheCommand(params);
    await client.send(command);
  } catch (error) {
    console.error({
      state: "ERROR_ON_INVALIDATE_CACHE",
      error,
    });
  }
};
