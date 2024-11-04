const express = require("express");
const {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
  notGuncelle,
} = require("../controllers/notController");

//! Router Oluştur
const router = express.Router();

//! Bütün notları listele
router.get("/", notlarGetir);

//! İd'li elemanı listele
router.get("/:id", notGetir);

//! Eleman ekle
router.post("/", notOlustur);

//! Elemanı Sil
router.delete("/:id", notSil);

//! Elemanı Güncelle
router.patch("/:id", notGuncelle);

module.exports = router;
