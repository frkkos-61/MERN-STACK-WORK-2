const mongoose = require("mongoose");

//! Şema Türet
const Sema = mongoose.Schema;
const notSema = Sema(
  {
    baslik: {
      type: String,
      required: [true,"Başlık Bilgisi Boş Bırakılamaz."]
    },
    aciklama: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Not", notSema);
