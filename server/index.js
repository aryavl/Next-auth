import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import adminModel from "./model/adminModel.js";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
 adminModel 
app.listen(process.env.PORT, () => {
  console.log("connected TO ", `${process.env.PORT}`);
});
