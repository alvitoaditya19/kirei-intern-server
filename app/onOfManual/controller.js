const onOfManual = require("./model");

module.exports = {
  actionCreate: async (req, res, next) => {
    try {
      const { statusKontrol } = req.body;

      const payload = {
        statusKontrol: statusKontrol,
      };

      const onOfKontrol = new onOfManual(payload);

      await onOfKontrol.save();

      res.status(200).json({ data: onOfKontrol });
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },

  actionStatusControl: async (req, res) => {
    try {
      const { id } = req.params;
      let lampu = await Lampu.findOne({ _id: id });
      let lampu1 = lampu.lampu1 === "ON" ? "OFF" : "ON";

      lampu = await Lampu.findOneAndUpdate(
        {
          _id: id,
        },
        { lampu1 }
      );

      req.flash("alertMessage", "Berhasil Ubah Status");
      req.flash("alertStatus", "success");

      res.redirect("/lampu");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/lampu");
    }
  },
};
