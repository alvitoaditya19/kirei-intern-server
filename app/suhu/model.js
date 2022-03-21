const mongoose = require("mongoose");

let suhuSchema = mongoose.Schema({
  fahreinhet: {
    type: String,
    require: [true, "Suhu Fahreinhet Harus Diisi"],
    
  },
  celcius: {
    type: String,
    require: [true, "Suhu Celcius Harus Diisi"],
  },
},{ timestamps: true });

module.exports = mongoose.model("Suhu", suhuSchema);
