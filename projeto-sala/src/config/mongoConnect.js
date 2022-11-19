const mongoose = require("mongoose");

const connect = async () => {
  return mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('db conectado')
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

module.exports = {
  connect,
};
