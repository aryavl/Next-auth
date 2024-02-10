import express from "express";
import "dotenv/config";
import cors from 'cors'
import { PrismaClient } from '@prisma/client';
import usersRoute from "./routes/usersRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/user', usersRoute);

app.listen(process.env.PORT, () => {
  console.log("Connected to port", process.env.PORT);
  prisma.$connect()
    .then(() => console.log("Connected to MongoDB via prisma"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));
});
