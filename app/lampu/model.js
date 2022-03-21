const mongoose = require("mongoose");


const lampuSchema = mongoose.Schema({
  lampu1: {
    type: String,
    require: [true, "Lampu 1 Harus Diisi"],
    default: "ON"
  },
  lampu2: {
    type: String,
    require: [true, "Lampu 2 Harus Diisi"],
    default: "ON"
  },
},{ timestamps: true });

module.exports = mongoose.model("Lampu", lampuSchema);
