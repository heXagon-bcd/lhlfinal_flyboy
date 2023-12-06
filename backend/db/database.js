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
  const queryString = "";
};

const saveItinerary = (json) => {
  const queryString =
    "INSERT INTO itinerary (users_id, trip_name, start_location, end_location, start_date, end_date, flight_price, hotel_cost, hotel_description, interest_name, interest_location, interest_image, interest_rating) VALUES (1, )";
};

getUser();
module.exports = { getUser };
