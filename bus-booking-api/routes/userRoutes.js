import express from "express";
import { verifyToken } from "../middleware/middlewareAuth.js";
import {
  searchBuses,
  bookBus,
  cancelBooking,
} from "../controllers/userController.js";

const router = express.Router();
router.get("/search", searchBuses);

router.post("/book", verifyToken, bookBus);
router.delete("/cancel/:bookingId", verifyToken, cancelBooking);

export default router;
