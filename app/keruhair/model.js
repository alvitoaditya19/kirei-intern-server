const mongoose = require("mongoose");

let kekeruhanAirSchema = mongoose.Schema({
  kekeruhanAir: {
    type: String,
    require: [true, "KekeruhanAir Humidity Harus Diisi"],
  },
},{ timestamps: true });

module.exports = mongoose.model("TdsAir", kekeruhanAirSchema);
