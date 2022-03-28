const Lampu = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const lampu = await Lampu.findOne();
      res.render("admin/lampu/view_lampu", {
        title: "Halaman Lampu",
        lampu,
        alert

      });
    } catch (err) {
       req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/lampu");
    }
  },
  actionCreate: async (req, res, next) => {
    try {
      const { lampu1, lampu2 } = req.body;

      const payload = {
        lampu1: lampu1,
        lampu2: lampu2,
      };

      const lampu = new Lampu(payload);
      console.log("res_payment ==>");
      console.log(payload);
      await lampu.save();

      res.status(200).json({ data: lampu });
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },

  actionStatusLampu1: async (req, res) => {
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

  actionStatusLampu2: async (req, res) => {
    try {
      const { id } = req.params;
      let lampu = await Lampu.findOne({ _id: id });
      let lampu2 = lampu.lampu2 === "ON" ? "OFF" : "ON";

      lampu = await Lampu.findOneAndUpdate(
        {
          _id: id,
        },
        { lampu2 }
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
  lampu: async (req, res, next) => {
    try {
      const lampu = await Lampu.find();

      res.status(200).json({ data: lampu });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal Server Error` });
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
