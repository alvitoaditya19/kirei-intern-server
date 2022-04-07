const OnOfManual = require("./model");

module.exports = {
  getData: async (req, res, next) => {
    try {
      const onOfKontrol = await OnOfManual.find();

      res.status(200).json({ data: onOfKontrol });
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
  actionCreate: async (req, res, next) => {
    try {
      const { statusKontrol } = req.body;

      const payload = {
        statusKontrol: statusKontrol,
      };

      const onOfKontrol = new OnOfManual(payload);

      await onOfKontrol.save();

      res.status(200).json({ data: onOfKontrol });
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
};
