const Lampu = require("./model");

module.exports = {
  lampu: async (req, res, next) => {
    try {
      const { lampu1, lampu2 } = req.body;

      const payload = {
        lampu1: lampu1,
        lampu2: lampu2,
      };

      const lampu = new Lampu(payload);
      await lampu.save();

      res.status(200).json({ data: lampu });
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },

  updateLampu: async (req, res, next) => {
    try {
      const { lampu1 = "", lampu2 = "" } = req.body

      const payload = {}

      if (lampu1.length) payload.lampu1 = lampu1
      if (lampu2.length) payload.lampu2 = lampu2

      const lampu = await Lampu.findOneAndUpdate({
        _id: "6237da2d8072c0e139de9d43"
      }, payload, { new: true, runValidators: true })

      res.status(201).json({
        data: {
          id: lampu.id,
          lampu1: lampu.lampu1,
          lampu2: lampu.lampu2,
        }
      })
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
};
