const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Aplicación Parcial 1 - Camila Leon 🚀</h1>");
});

app.get("/status", (req, res) => {
  res.json({ status: "Aplicación activa", author: "Camila Leon" });
});

app.listen(80, "0.0.0.0", () => {
  console.log("Servidor corriendo en puerto 80");
});

