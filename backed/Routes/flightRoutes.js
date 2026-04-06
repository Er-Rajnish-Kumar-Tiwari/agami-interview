const express = require("express");
const axios = require("axios");
const Flight = require("../Models/FlightCache");

const router = express.Router();

router.get("/flights", async (req, res) => {
  const { iataCode, type, date } = req.query;

  //  Validation
  if (!iataCode || !type || !date) {
    return res.status(400).json({
      message: "iataCode, type, date are required",
    });
  }

  try {
    //  Check cache
    const cached = await Flight.findOne({ iataCode, type, date });

    if (cached) {
      return res.json({
        source: "cache",
        data: cached.data,
      });
    }

    //  API Call
    const response = await axios.get(
      "http://api.aviationstack.com/v1/flightsFuture",
      {
        params: {
          access_key: "35bc4495afcaabb850766651a829ca4d", 
          dep_iata: type === "departure" ? iataCode : undefined,
          arr_iata: type === "arrival" ? iataCode : undefined,
          flight_date: date,
        },
      }
    );

    //  Save in DB (cache)
    await Flight.create({
      iataCode,
      type,
      date,
      data: response.data,
    });

    res.json({
      source: "api",
      data: response.data,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Server Error",
    });
  }
});

module.exports = router;