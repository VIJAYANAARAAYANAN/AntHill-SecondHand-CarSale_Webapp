import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import User from "../models/User.js";
import { verifyToken, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const users = await User.find({});
  if (users.length === 0) {
    return registerUser(req, res);
  } else {
    verifyToken(req, res, () => verifyAdmin(req, res, () => registerUser(req, res)));
  }
});
router.post("/login", loginUser);


export default router;
