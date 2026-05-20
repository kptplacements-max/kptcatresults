import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import connectDB from "../config/db.js";

import resultRoutes from "../routes/resultRoutes.js";

dotenv.config();

const app = express();

// MIDDLEWARES
app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

// ROUTES
app.use("/api/results", resultRoutes);

app.get("/", (req, res) => {
  res.send("CET Backend Running");
});

// START SERVER ONLY AFTER DB CONNECTION
const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Server startup failed");

    console.log(error);

    process.exit(1);
  }
};

startServer();
