const mongoose = require("mongoose");

let cachedConnection = null;

function registerModel(model) {
  if (!model) return;
  cachedConnection.model(model.name, model.schema);
}

module.exports = async (model = null) => {
  if (cachedConnection && cachedConnection.readyState == 1) {
    registerModel(model);
    return cachedConnection;
  }
  let _connection = mongoose.createConnection(process.env.MONGODB_URI, {
    dbName: "Learning",
    keepAlive: true,
  });

  cachedConnection = _connection;
  registerModel(model);

  return cachedConnection;
};
