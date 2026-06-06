import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 8000;
const MONGO_URI = process.env.MONGO_URI ?? "mongodb://127.0.0.1:27017/octofit";

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "OctoFit Tracker backend is running" });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
      console.log(`MongoDB connected at ${MONGO_URI}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  });
