const mongoose = require("mongoose");

const PassengerSchema = new mongoose.Schema(
  {
    name: { type: String },
    trips: { type: Number },
    airline: { type: mongoose.Schema.Types.ObjectId, ref: "Airline" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Passenger", PassengerSchema);
