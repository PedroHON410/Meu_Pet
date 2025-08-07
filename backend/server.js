import express from "express";
const app = express();
const users = [];
app.post("/usuarios", (req, res) => {
  res.status(201).json({ message: "Usuário criado com sucesso" });
});

app.get("/usuarios", (req, res) => {
  res.send(["ok deu certo"]);
});
app.listen(3000);
