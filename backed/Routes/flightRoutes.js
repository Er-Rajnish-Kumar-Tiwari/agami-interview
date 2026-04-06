const express = require("express");
const axios = require("axios");
const Flight = require("../Models/FlightCache");

const router = express.Router();

// GET /api/flights?airport=BOM&date=2026-05-20&type=departure
router.get("/flights", async (req, res) => {
  const { airport, date, type = "departure" } = req.query;

  //  Validation
  if (!airport || !date) {
    return res.status(400).json({
      message: "airport and date are required",
    });
  }

  try {
    //  Check Cache
    const cached = await Flight.findOne({ airport, date, type });

    if (cached) {
      return res.json({
        source: "cache",
        data: cached.data,
      });
    }

    // API Call
    const response = await axios.get(
      "http://api.aviationstack.com/v1/flights",
      {
        params: {
          access_key: process.env.API_KEY,
          dep_iata: type === "departure" ? airport : undefined,
          arr_iata: type === "arrival" ? airport : undefined,
          flight_date: date,
        },
      }
    );

    // Process Data (important for frontend)
    const flights = response.data.data.map((flight) => ({
      airline: flight.airline?.name,
      flight_number: flight.flight?.iata,
      departure_airport: flight.departure?.airport,
      arrival_airport: flight.arrival?.airport,
      departure_time: flight.departure?.scheduled,
      arrival_time: flight.arrival?.scheduled,
      status: flight.flight_status,
    }));

    //  Save in Cache
    await Flight.create({
      airport,
      type,
      date,
      data: flights,
    });

    // Response
    res.json({
      source: "api",
      results: flights,
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Server Error",
    });
  }
});

module.exports = router;