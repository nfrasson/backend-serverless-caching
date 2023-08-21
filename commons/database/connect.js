const mongoose = require("mongoose");

let cachedConnection = null;

function registerModel(model) {
  if (!model) return;
  return cachedConnection.model(model.name, model.schema);
}

module.exports = (model = null) => {
  if (cachedConnection && cachedConnection.readyState == 1)
    return registerModel(model);

  let _connection = mongoose.createConnection(process.env.MONGODB_URI, {
    dbName: "Learning",
  });

  cachedConnection = _connection;
  return registerModel(model);
};
