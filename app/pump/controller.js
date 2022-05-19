const Pump = require("./model");

module.exports = {
  pumpAPI: async (req, res, next) => {
    try {
      const pump = await Pump.find();

      res.status(200).json({ data: pump });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal Server Error` });
    }
  },
  actionCreate: async (req, res, next) => {
    try {
      const { pump1, pump2 } = req.body;

      const payload = {
        pump1: pump1,
        pump2: pump2,
      };

      const pump = new Pump(payload);
      await pump.save();

      res.status(200).json({ data: pump });
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },

  updateLampu: async (req, res, next) => {
    try {
      const { lampu1 = "", lampu2 = "" } = req.body;

      const payload = {};

      if (lampu1.length) payload.lampu1 = lampu1;
      if (lampu2.length) payload.lampu2 = lampu2;

      const lampu = await Lampu.findOneAndUpdate(
        {
          _id: "623917f9d0b8019f7e953523",
        },
        payload,
        { new: true, runValidators: true }
      );

      res.status(201).json({
        data: {
          id: lampu.id,
          lampu1: lampu.lampu1,
          lampu2: lampu.lampu2,
        },
      });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal Server Error` });
    }
  },
};
