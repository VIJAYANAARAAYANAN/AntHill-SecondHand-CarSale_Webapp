// controllers/userController.js
import Bus from "../models/Bus.js";
import Route from "../models/Route.js";
import Booking from "../models/Booking.js";
import mongoose from "mongoose";

// Search for buses based on route
export const searchBuses = async (req, res) => {
  const { source, destination } = req.query;
  if (!source || !destination) {
    return res
      .status(400)
      .json({ message: "Source and destination are required" });
  }

  try {
    // Find matching routes
    const routes = await Route.find({ source, destination });
    if (!routes.length) {
      return res.status(404).json({ message: "No routes found" });
    }

    // Find buses on the matching routes
    const buses = await Bus.find({
      route: { $in: routes.map((r) => r._id) },
    }).populate("route");
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Book a bus
export const bookBus = async (req, res) => {
  const { busId, seats } = req.body;
  const userId = req.user.id; // Ensure token middleware extracts this

  try {
    // Validate seats input
    if (!seats || seats <= 0) {
      return res.status(400).json({ message: "Invalid seat count" });
    }

    // Check if bus exists
    const bus = await Bus.findById(busId);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    // Check for available seats
    if (bus.capacity < seats) {
      return res.status(400).json({ message: "Not enough seats available" });
    }

    // Update bus capacity
    bus.capacity -= seats;
    await bus.save();

    // Create booking
    const booking = await Booking.create({
      user: userId,
      bus: busId,
      seatsBooked: seats,
    });

    res.status(200).json({
      message: "Booking successful",
      booking,
      updatedBusCapacity: bus.capacity,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// Cancel booking
export const cancelBooking = async (req, res) => {
  const { bookingId } = req.params;
  const userId = req.user.id; // Ensure the user is verified from the token

  try {
    // Find the booking and validate ownership
    const booking = await Booking.findById(bookingId).populate("bus");
    if (!booking || booking.status === "Cancelled") {
      return res
        .status(404)
        .json({ message: "Booking not found or already cancelled" });
    }

    if (booking.user.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to cancel this booking" });
    }

    // Update bus capacity
    const bus = await Bus.findById(booking.bus._id);
    bus.capacity += booking.seatsBooked;
    await bus.save();

    // Update booking status
    booking.status = "Cancelled";
    await booking.save();

    res.status(200).json({
      message: "Booking cancelled successfully",
      booking,
      updatedBusCapacity: bus.capacity,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
