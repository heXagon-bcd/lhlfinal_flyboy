const { Pool } = require("pg");

const pool = new Pool({
  user: "shawnhe",
  password: "shawnhe",
  host: "localhost",
  database: "flyboy",
});

const getUser = () => {
  const queryString = " SElECT * FROM USERS;";
  return pool.query(queryString).then((result) => {
    console.log("getUser Query", result.rows);
  });
};

const findItinerary = (userid) => {
  const queryString = "SELECT * FROM ITINERARY;";
  return pool.query(queryString).then((result) => {
    console.log("getUser Query", result.rows);
  });
};

const saveItinerary = async (jsonData) => {
  if (!jsonData) {
    throw new Error("jsonData is undefined");
  }
  console.log("json data", jsonData[0]);
  // Destructure JSON data to extract itinerary information
  const yelpApiData = jsonData[0].find((item) => item.yelpApi);
  const bookingsApiData = jsonData[0].find((item) => item.bookingsAPI);
  const hotelApiData = jsonData[0].find((item) => item.hotelAPI);

  // hard code user id
  const tripName = "Toronto Clubbing 2023";
  const usersId = 3;

  // Iterate over the yelpApi array and insert each interest into the database
  for (const interest of yelpApiData.yelpApi) {
    const interestName = interest.name;
    const interestLocation = interest.location;
    const interestImage = interest.image;
    const interestRating = interest.rating.toString();

    // For bookingsAPI and hotelAP
    const startLocation = bookingsApiData.bookingsAPI.startCity;
    const endLocation = bookingsApiData.bookingsAPI.endCity;
    const startDate = interest.date; // or bookingsApiData.bookingsAPI.departureDate if it should be the flight date
    const endDate = bookingsApiData.bookingsAPI.returnDate;
    const flightPrice =
      bookingsApiData.bookingsAPI.flightDetailsPrice.toString();
    const hotelCost = hotelApiData.hotelAPI.hotelCost.toString();
    const hotelDescription = hotelApiData.hotelAPI.hotelDescription;

    const queryString = `
      INSERT INTO itinerary (
        users_id, trip_name, start_location, end_location, start_date,
        end_date, flight_price, hotel_cost, hotel_description,
        interest_name, interest_location, interest_image, interest_rating
      ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13
      )
    `;

    const values = [
      usersId,
      tripName,
      startLocation,
      endLocation,
      startDate,
      endDate,
      flightPrice,
      hotelCost,
      hotelDescription,
      interestName,
      interestLocation,
      interestImage,
      interestRating,
    ];

    try {
      // Execute the query
      await pool.query(queryString, values);
      console.log(`Itinerary for ${interestName} saved successfully.`);
    } catch (error) {
      console.error("Error saving itinerary to the database:", error);
    }
  }
};
module.exports = { getUser, saveItinerary };
