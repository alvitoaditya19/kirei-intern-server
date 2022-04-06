const KelembapanTanah = require("./model");

module.exports = {
  index: async (req, res, next) => {
    try {
      const { kelembapanTanah } = req.body;

      const payload = {
        kelembapanTanah: kelembapanTanah,
      };

      const kelentan = new Cuaca(payload);
      await kelentan.save();

      res.status(200).json({ data: kelentan });

    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
  getData: async(req, res)=>{
    try {
      const tanah = await KelembapanTanah.find();

        res.status(200).json({data: tanah});
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`})
    }
  },
  updateTanah: async (req, res, next) => {
    try {
      const { kelembapanTanah = "" } = req.body

      const payload = {}

      if (kelembapanTanah.length) payload.kelembapanTanah = kelembapanTanah

      const kelemtan = await KelembapanTanah.findOneAndUpdate({
        _id: "6237ce9d0e0c2df0964e1272"
      }, payload, { new: true, runValidators: true })

      res.status(201).json({
        data: {
          id: kelemtan.id,
          kelembapanTanah: kelemtan.kelembapanTanah,
        }
      })
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
};
