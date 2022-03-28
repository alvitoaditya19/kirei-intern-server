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
  
  actionStatus: async (req,res)=>{
    try {
      const { id } = req.params
      let voucher = await Voucher.findOne({_id:id})
      let status = voucher.status === 'Y' ? 'N' : 'Y'

      voucher = await Voucher.findOneAndUpdate({
        _id:id
      },{status})

        req.flash("alertMessage", "Berhasil Ubah Status");
        req.flash("alertStatus", "success");

        res.redirect("/voucher");

    } catch (error) {
        req.flash("alertMessage", `${err.message}`);
        req.flash("alertStatus", "danger");
        res.redirect("/vocuher");
    }
    },
  suhu: async (req, res, next) => {
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
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
  updateSuhu: async (req, res, next) => {
    try {
      const { id } = req.params
      const { celcius = "", fahreinhet = "" } = req.body

      const payload = {}

      if (celcius.length) payload.celcius = celcius
      if (fahreinhet.length) payload.fahreinhet = fahreinhet

      const suhu = await Suhu.findOneAndUpdate({
        _id: id
      }, payload, { new: true, runValidators: true })

      res.status(201).json({
        data: {
          id: suhu.id,
          celcius: suhu.celcius,
          fahreinhet: suhu.fahreinhet,
        }
      })
    } catch (err) {
      res.status(500).json({message: err.message || `Internal Server Error`});
    }
  },
};
