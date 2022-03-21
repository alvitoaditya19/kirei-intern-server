const Cuaca = require("./model");

module.exports = {
  cuaca: async (req, res, next) => {
    try {
      const { cuaca } = req.body;

      const payload = {
        cuaca: cuaca,
      };

      const cuacaNow = new Cuaca(payload);
      await cuacaNow.save();

      res.status(200).json({ data: cuacaNow });
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
  updateCuaca: async (req, res, next) => {
    try {
      const { cuaca = "" } = req.body

      const payload = {}

      if (cuaca.length) payload.cuaca = cuaca

      const cuacaNow = await Cuaca.findOneAndUpdate({
        _id: "6237d94ec95198e1fabfb3e0"
      }, payload, { new: true, runValidators: true })

      res.status(201).json({
        data: {
          id: cuacaNow.id,
          kelembapanTanah: cuacaNow.cuaca,
        }
      })
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
};
