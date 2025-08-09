import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
// Initialize Express application
const app = express();

// Informs that the "app" is an application for "json
app.use(express.json());

// Define a simple in-memory array to store users
const users = [];

// Define routes for user management and create a new users
app.post("/usuarios", async (req, res) => {
  // Asynchronous information that will return
  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    },
  });
  res.status(201).json(newUser);
});

app.get("/usuarios", async (req, res) => {
  const usuarios = await prisma.user.findMany();
  res.status(200).json(usuarios);
});
