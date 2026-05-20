import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import connectDB from "./config/db.js";

import resultRoutes from "./routes/resultRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.use("/api/results", resultRoutes);

app.get("/", (req, res) => {
  res.send("CET Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
