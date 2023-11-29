const express = require("express");
const router = express.Router();
const { search } = require("./helper/search");

router.post("/flight", async (request, response) => {
  try {
    const terms = request.body.interest1;
    const location = request.body.destination;

    const result = await search(terms, location);
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
