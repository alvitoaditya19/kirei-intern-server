const Suhu = require("./model");

module.exports = {
  suhu: async (req, res, next) => {
    try {
      const { celcius, fahreinhet } = req.body;

      const payload = {
        celcius: celcius,
        fahreinhet: fahreinhet,
      };

      const suhu = new Suhu(payload);
      console.log("res_payment ==>");
      console.log(payload);
      await suhu.save();

      res.status(200).json({ data: suhu });
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
  updateSuhu: async (req, res, next) => {
    try {
      const { id } = req.params
      const { celcius = "", fahreinhet = "" } = req.body

      const payload = {}

      if (celcius.length) payload.celcius = celcius
      if (fahreinhet.length) payload.fahreinhet = fahreinhet

      const suhu = await Suhu.findOneAndUpdate({
        _id: id
      }, payload, { new: true, runValidators: true })

      res.status(201).json({
        data: {
          id: suhu.id,
          celcius: suhu.celcius,
          fahreinhet: suhu.fahreinhet,
        }
      })
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
};
