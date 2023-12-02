const express = require("express");
const router = express.Router();
const { search } = require("./helper/search");
const { getFlightData } = require("../api/skyscanner");

router.post("/flight", async (request, response) => {
  try {
    console.log("term search response.body", request.body);
    const terms = request.body.interest1;
    const location = request.body.destination;
    const startLocation = request.body.locationFromDeparture; //may need refactoring
    const endLocation = request.body.destination;
    const sDate = request.body.departureDate;
    const rDate = request.body.returnDate;

    console.log("startLocation", startLocation);

    const result = await search(terms, location);
    const flightDataReturn = await getFlightData(
      startLocation,
      endLocation,
      sDate,
      rDate
    );

    console.log("response result termsearch", [
      { yelpApi: result },
      { bookingsAPI: flightDataReturn },
    ]);
    response.json([{ yelpApi: result }, { bookingsAPI: flightDataReturn }]);
    console.log("request", request);
    console.log("response", response);

    console.log(result);
    response.json({ result });
  } catch (error) {
    console.error("Error in /api/flights route:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
