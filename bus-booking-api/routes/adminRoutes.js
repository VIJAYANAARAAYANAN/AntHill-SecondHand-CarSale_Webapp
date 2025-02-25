// routes/adminRoutes.js
import express from "express";
import { registerUser} from "../controllers/authController.js";

import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";
import {
  addBus,
  updateBus,
  addRoute,
  updateRoute,
} from "../controllers/adminController.js";

const router = express.Router();

// Bus Management
router.post("/bus", verifyToken, verifyAdmin, addBus);
router.put("/bus/:id", verifyToken, verifyAdmin, updateBus);

// Route Management
router.post("/route", verifyToken, verifyAdmin, addRoute);
router.put("/route/:id", verifyToken, verifyAdmin, updateRoute);

//Creatingn users
router.post("/create-user", verifyToken, verifyAdmin, registerUser);

export default router;
