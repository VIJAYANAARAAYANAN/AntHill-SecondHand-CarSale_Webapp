// routes/userRoutes.js
import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import {
  searchBuses,
  bookBus,
  cancelBooking,
} from "../controllers/userController.js";

const router = express.Router();

// Search Buses
router.get("/search", searchBuses);

// Booking and Cancellation
router.post("/book", verifyToken, bookBus);
router.delete("/cancel/:bookingId", verifyToken, cancelBooking);

export default router;
