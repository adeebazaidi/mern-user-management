import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deactivateUser,
  getMyProfile,
  updateMyProfile,
} from "../controllers/userController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorize } from "../middleware/roleMiddleware.js";

const router = express.Router();

// 🔹 Admin routes
router.get("/", protect, authorize("admin"), getUsers);
router.post("/", protect, authorize("admin"), createUser);
router.put("/:id", protect, authorize("admin"), updateUser);
router.delete("/:id", protect, authorize("admin"), deactivateUser);

// 🔹 Profile routes (ALL logged-in users)
router.get("/profile", protect, getMyProfile);
router.put("/profile", protect, updateMyProfile);

export default router;
