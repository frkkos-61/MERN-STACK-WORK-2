const express = require("express");
require("dotenv").config();
const notRoute = require("./routes/notlar");
const mongoose = require("mongoose");
const cors = require("cors"); // CORS'u en üstte tanımlayın

//! Express oluştur.
const app = express();

//! CORS middleware'ini ekleyin
app.use(cors());

//! JSON verilerini işlemek için middleware
app.use(express.json());

//! Logger middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//! Veri Tabanına Bağlan
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("VERİ TABANI BAĞLANDI");

    app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT} Port Dinleniyor.`);
    });
  })
  .catch((err) => {
    console.log(err, "VERİ TABANI BAĞLANAMADI");
  });

//! Endpointler
app.use("/api/notlar", notRoute);
