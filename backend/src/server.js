import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { protect } from "./middleware/authMiddleware.js";

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

// Routes (keep all together)
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// Protected test route
app.get("/api/test", protect, (req, res) => {
  res.json({
    message: "Protected route working",
    user: req.user,
  });
});

// Test Route
app.get("/", (req, res) => {
  res.send("API running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
