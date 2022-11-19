const mongoose = require("mongoose");

const connect = async () => {
  return mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('Thamiles seu Banco de dados está conectado')
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
};

module.exports = {
  connect
};
