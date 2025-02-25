// models/Booking.js
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bus: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
  seatsBooked: { type: Number, required: true },
  status: { type: String, default: "Booked" }, // Booked or Cancelled
  bookingDate: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", bookingSchema);
