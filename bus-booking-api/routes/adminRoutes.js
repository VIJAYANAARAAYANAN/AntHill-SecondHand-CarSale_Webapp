import express from "express";
import { registerUser} from "../controllers/authController.js";

import { verifyToken, verifyAdmin } from "../middleware/middlewareAuth.js";
import {
  addBus,
  updateBus,
  addRoute,
  updateRoute,
} from "../controllers/adminController.js";

const router = express.Router();

router.post("/bus", verifyToken, verifyAdmin, addBus);
router.put("/bus/:id", verifyToken, verifyAdmin, updateBus);


router.post("/route", verifyToken, verifyAdmin, addRoute);
router.put("/route/:id", verifyToken, verifyAdmin, updateRoute);


router.post("/create-user", verifyToken, verifyAdmin, registerUser);

export default router;
