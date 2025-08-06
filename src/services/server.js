import express from "express";
const app = express();
const users = [];
app.post("/usuarios", (req, res) => {

app.get("/usuarios", (req, res) => {
  res.send(["ok deu certo"]);
});
app.listen(5173);
5g5