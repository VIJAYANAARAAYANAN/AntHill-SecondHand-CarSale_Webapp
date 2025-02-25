// controllers/adminController.js
import Bus from "../models/Bus.js";
import Route from "../models/Route.js";

// Add a new bus
export const addBus = async (req, res) => {
  try {
    const { busNumber, busName, capacity, type, route } = req.body;

    // Check for existing busNumber
    const existingBus = await Bus.findOne({ busNumber });
    if (existingBus) {
      return res.status(400).json({ message: "Bus with this number already exists" });
    }

    // Create new bus
    const newBus = new Bus({ busNumber, busName, capacity, type, route });
    await newBus.save();

    res.status(201).json({ message: "Bus added successfully", bus: newBus });
  } catch (error) {
    res.status(500).json({ message: "Error adding bus", error: error.message });
  }
};

// Update bus details
export const updateBus = async (req, res) => {
  try {
    const busId = req.params.id;
    const updates = req.body;

    const updatedBus = await Bus.findByIdAndUpdate(busId, updates, { new: true });

    if (!updatedBus) {
      return res.status(404).json({ message: "Bus not found" });
    }

    res.status(200).json({ message: "Bus updated successfully", bus: updatedBus });
  } catch (error) {
    res.status(500).json({ message: "Error updating bus", error: error.message });
  }
};

// Add a new route
export const addRoute = async (req, res) => {
  try {
    const { source, destination, distance, departureTime, arrivalTime } = req.body;

    // Create new route
    const newRoute = new Route({ source, destination, distance, departureTime, arrivalTime });
    await newRoute.save();

    res.status(201).json({ message: "Route added successfully", route: newRoute });
  } catch (error) {
    res.status(500).json({ message: "Error adding route", error: error.message });
  }
};

// Update route details
export const updateRoute = async (req, res) => {
  try {
    const routeId = req.params.id;
    const updates = req.body;

    const updatedRoute = await Route.findByIdAndUpdate(routeId, updates, { new: true });

    if (!updatedRoute) {
      return res.status(404).json({ message: "Route not found" });
    }

    res.status(200).json({ message: "Route updated successfully", route: updatedRoute });
  } catch (error) {
    res.status(500).json({ message: "Error updating route", error: error.message });
  }
};
