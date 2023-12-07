const express = require("express");
const router = express.Router();
const { search } = require("./helper/search");
const { getFlightData } = require("../api/skyscanner");
const { getHotelData } = require("../api/hotelscanner");
const database = require("../db/database");

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
    console.log("result", result);

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

    const returnData = [
      { yelpApi: result },
      { bookingsAPI: flightDataReturn },
      { hotelAPI: hotelDataReturn },
    ];

    console.log("response result termsearch", [
      { yelpApi: result },
      { bookingsAPI: flightDataReturn },
      { hotelAPI: hotelDataReturn },
    ]);
    console.log("yelpAPI", result);
    response.json(returnData); //sends object back to client
  } catch (error) {
    console.error("Error in /api/flights route:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/flight/database", async (request, response) => {
  try {
    console.log("db req", request.body);
    await database.saveItinerary(request.body);
    response.json({ message: "Itinerary saved successfully" });
  } catch (error) {
    console.error("Error in /api/flights route:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
