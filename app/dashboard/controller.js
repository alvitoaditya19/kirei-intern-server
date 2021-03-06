const Lampu = require("../lampu/model");
const Pump = require("../pump/model");
const Tanah = require("../tanah/model");
const OnOfManual = require("../onOfManual/model");
const Suhu = require("../suhu/model");
const WaterLevel = require("../water/model");
const TDSLevel = require("../keruhair/model");
const Vegetable = require("../setting/model");
const User = require("../user/model");



module.exports = {
  index: async (req, res) => {
    try {      
      const lampu = await Lampu.findOne()
      const suhu = await Suhu.findOne()
      const pump = await Pump.findOne()
      const tanah = await Tanah.findOne()
      const onOfManual = await OnOfManual.findOne()  
      const waterlevel = await WaterLevel.findOne()
      const tdsLevel = await TDSLevel.find().sort({created_at: -1}).limit(1);
      const vegetable1 = await Vegetable.findById("62772ed88e95ab077ed764a3");
      const vegetable2 = await Vegetable.findById("62787d4f9f1c9d93d46815cd");
      const user = await User.countDocuments();
      
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");

      const alert = { message: alertMessage, status: alertStatus };

      res.render("admin/dashboard/view_dashboard",{
        name : req.session.admin.name,
        title: "Halaman Dashboard",
        count: {
          user
        },
        vegetable1,
        vegetable2,
        lampu,
        pump,
        suhu,
        tanah,
        onOfManual,
        waterlevel,
        tdsLevel,
        user,
        alert
      });
    } catch (err) {
      // console.log(err);
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

      res.redirect("/dashboard");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/dashboard");
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

      res.redirect("/dashboard");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/dashboard");
    }
  },
  actionStatusPump1: async (req, res) => {
    try {
      const { id } = req.params;
      let pump = await Pump.findOne({ _id: id });
      let pump1 = pump.pump1 === "ON" ? "OFF" : "ON";

      pump = await Pump.findOneAndUpdate(
        {
          _id: id,
        },
        { pump1 }
      );

      req.flash("alertMessage", "Berhasil Ubah Status");
      req.flash("alertStatus", "success");

      res.redirect("/dashboard");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/dashboard");
    }
  },
  actionStatusPump2: async (req, res) => {
    try {
      const { id } = req.params;
      let pump = await Pump.findOne({ _id: id });
      let pump2 = pump.pump2 === "ON" ? "OFF" : "ON";

      pump = await Pump.findOneAndUpdate(
        {
          _id: id,
        },
        { pump2 }
      );

      req.flash("alertMessage", "Berhasil Ubah Status");
      req.flash("alertStatus", "success");

      res.redirect("/dashboard");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/dashboard");
    }

    },
    
  actionStatusControl: async (req, res) => {
    try {
      const { id } = req.params;
      let onOfManual = await OnOfManual.findOne({ _id: id });
      let statusKontrol = onOfManual.statusKontrol === "ON" ? "OFF" : "ON";

      statusKontrol = await OnOfManual.findOneAndUpdate(
        {
          _id: id,
        },
        { statusKontrol }
      );

      req.flash("alertMessage", "Berhasil Ubah Status");
      req.flash("alertStatus", "success");

      res.redirect("/dashboard");
    } catch (error) {
      req.flash("alertMessage", `${err.message}`);
      req.flash("alertStatus", "danger");
      res.redirect("/dashboard");
    }
  },
  };
