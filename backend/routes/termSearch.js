const express = require("express");
const router = express.Router();
const { search } = require("./helper/search");

router.post("/flight", async (request, response) => {
  try {
    const { interest1, interest2, interest3, destination } = request.body;
    const terms = [interest1, interest2, interest3]; 

    const result = await search(terms, destination);

    console.log(result);
    response.json({ result });
  } catch (error) {
    console.error("Error in /api/flights route:", error);
    response.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
