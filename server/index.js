import express from "express";
import "dotenv/config";
import cors from 'cors'
import mongoose from "mongoose";
import usersRoute from "./routes/usersRoutes.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/users',usersRoute)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });

app.listen(process.env.PORT, () => {
  console.log("connected TO ", `${process.env.PORT}`);
});
