const mongoose = require("mongoose");

let cuacaSchema = mongoose.Schema({
  cuaca: {
    type: String,
    require: [true, "Kelembapan Harus Diisi"],
    enum: [ "Hujan", "Panas" ],
    default: "Panas",
  },
},{ timestamps: true });

module.exports = mongoose.model("Cuaca", cuacaSchema);
