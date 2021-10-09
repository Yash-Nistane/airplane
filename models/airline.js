const mongoose = require("mongoose");

const AirlineSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    country: { type: String },
    logo: { type: String, defaut: "" },
    slogan: { type: String },
    head_quaters: { type: String },
    website: { type: String },
    established: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Airline", AirlineSchema);
