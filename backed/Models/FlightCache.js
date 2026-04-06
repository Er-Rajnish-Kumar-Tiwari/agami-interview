const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  iataCode: String,
  type: String,
  date: String,
  data: Object,
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // Expires in 1 hour cache
  },
});

module.exports = mongoose.model("FlightCache", flightSchema);