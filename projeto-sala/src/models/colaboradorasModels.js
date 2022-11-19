const mongoose = require("mongoose");

const colaboradoraSchema = mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  preferenceName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("colaboradora", colaboradoraSchema);
