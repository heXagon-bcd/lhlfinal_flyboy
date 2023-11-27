const express = require("express");
const router = express.Router();
const { getFlightData } = require("../api/skyscanner");

router.get("/flightAPI", (request, response) => {
  console.log("Accessed /api/flightAPI");
  getFlightData()
    .then((data) => {
      console.log("router response", data);
      response.json(data); // It's better to use response.json for sending JSON data
    })
    .catch((error) => {
      console.error("Error in flightAPI route:", error);
      response.status(500).send("Error fetching flight data");
    });
});

module.exports = router;