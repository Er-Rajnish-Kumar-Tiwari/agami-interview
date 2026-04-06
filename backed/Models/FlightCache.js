const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  airport: String,
  type: String,
  date: String,
  data: Object,

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600, // 1 hour cache
  },
});

module.exports = mongoose.model("FlightCache", flightSchema);