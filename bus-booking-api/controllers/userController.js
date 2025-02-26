import Bus from "../models/BusModal.js";
import Route from "../models/RouteModal.js";
import Booking from "../models/BookingModal.js";
import mongoose from "mongoose";

export const searchBuses = async (req, res) => {
  const { source, destination } = req.query;
  if (!source || !destination) {
    return res
      .status(400)
      .json({ message: "Source and destination are required" });
  }

  try {
    const routes = await Route.find({ source, destination });
    if (!routes.length) {
      return res.status(404).json({ message: "No routes found" });
    }

    const buses = await Bus.find({
      route: { $in: routes.map((r) => r._id) },
    }).populate("route");
    res.status(200).json(buses);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const bookBus = async (req, res) => {
  const { busId,seats } = req.body;
  const userId = req.user.id;
  try {
    if (!seats || seats <= 0) {
      return res.status(400).json({message:"Invalid seat count"});
    }

    const bus = await Bus.findById(busId);
    if (!bus) {
      return res.status(404).json({ message: "Bus not found" });
    }
    if (bus.capacity < seats) {
      return res.status(400).json({ message: "Not enough seats available" });
    }
    bus.capacity -= seats;
    await bus.save();

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
