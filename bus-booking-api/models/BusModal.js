import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  busNumber: { type: String, required: true, unique: true },
  busName: { type: String, required: true },
  capacity: { type: Number, required: true },
  type: { type: String, required: true },
  route: { type: mongoose.Schema.Types.ObjectId, ref: "Route" },
});

export default mongoose.model("Bus", busSchema);
