const express = require("express");
const router = express.Router();
const { search } = require("./helper/search");
const { getFlightData } = require("../api/skyscanner");
const { getHotelData } = require("../api/hotelscanner");

router.post("/flight", async (request, response) => {
  try {
    console.log("term search response.body", request.body);
    const { interest1, interest2, interest3 } = request.body;
    const terms = [interest1, interest2, interest3];

    const startLocation = request.body.locationFromDeparture; //may need refactoring
    const endLocation = request.body.destination;

    const sDate = request.body.departureDate;
    const rDate = request.body.returnDate;

    console.log("startLocation", startLocation);

    const result = await search(terms, endLocation, sDate, rDate);

    const flightDataReturn = await getFlightData(
      startLocation,
      endLocation,
      sDate,
      rDate
    );

    const hotelDataReturn = await getHotelData(
      startLocation,
      endLocation,
      sDate,
      rDate
    );

    console.log("response result termsearch", [
      { yelpApi: result },
      { bookingsAPI: flightDataReturn },
      { hotelAPI: hotelDataReturn },
    ]);
    response.json([
      { yelpApi: result },
      { bookingsAPI: flightDataReturn },
      { hotelAPI: hotelDataReturn },
    ]); //sends object back to client
  } catch (error) {
    console.error("Error in /api/flights route:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
