const Suhu = require("./model");

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };
      const suhu = await Suhu.find();

      console.log("suhu ==>");
      console.log(suhu);

      res.render("admin/suhu/view_suhu", {
        suhu,
        alert,
        name: req.session.user.name,
        title: "Halaman Suhu",
      });
    } catch (err) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/suhu");
    }
  },
    
  getSuhu: async (req, res, next) => {
    try {
      const suhu = await Suhu.find().sort({created_at: -1}).limit(5);
      res.status(200).json({ data: suhu });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal Server Error` });
    }
  },
  postSuhu: async (req, res, next) => {
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
      res.status(500).json({ message: err.message || `Internal Server Error` });
    }
  },
  updateSuhu: async (req, res, next) => {
    try {
      const { id } = req.params;
      const { celcius = "", humidity = "" } = req.body;

      const payload = {};

      if (celcius.length) payload.celcius = celcius;
      if (humidity.length) payload.humidity = humidity;

      const suhu = await Suhu.findOneAndUpdate(
        {
          _id: "6237c861f31ee9b6d302f2f9",
        },
        payload,
        { new: true, runValidators: true }
      );

      res.status(201).json({
        data: {
          id: suhu.id,
          celcius: suhu.celcius,
          humidity: suhu.humidity,
        },
      });
    } catch (err) {
      res.status(500).json({ message: err.message || `Internal Server Error` });
    }
  },
};
