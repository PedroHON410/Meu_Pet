import express from "express";
import { use } from "react";
const app = express();
app.use(express.json());
const users = [];
app.post("/usuarios", (req, res) => {
  users.push(req.body);
  res.status(201).json(users);
});

app.get("/usuarios", (req, res) => {
  res.status(200).json(users);
});
app.listen(3000);
