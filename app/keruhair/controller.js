const KekeruhanAir = require("./model");

module.exports = {  
  getTds: async (req, res, next) => {
    try {
      const keruhAir = await KekeruhanAir.find().sort({created_at: -1}).limit(5);
      res.status(200).json({ data: keruhAir });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal Server Error` });
    }
  },
  postTds: async (req, res, next) => {
    try {
      const { kekeruhanAir } = req.body;

      const payload = {
        kekeruhanAir: kekeruhanAir,
      };

      const keruhAir = new KekeruhanAir(payload);
      await keruhAir.save();

      res.status(200).json({ data: keruhAir });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal Server Error` });
    }
  },
  updateTds: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { kekeruhanAir = "" } = req.body;

      const payload = {};

      if (kekeruhanAir.length) payload.kekeruhanAir = kekeruhanAir;

      const keruhAir = await KekeruhanAir.findOneAndUpdate(
        {
          _id: "6255747f5b79b549bf92242e",
        },
        payload,
        { new: true, runValidators: true }
      );

      res.status(201).json({
        data: {
          id: keruhAir.id,
          kekeruhanAir: keruhAir.kekeruhanAir,
        },
      });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal Server Error` });
    }
  },
};
