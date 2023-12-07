const db = require('../connection');

//select all itineraries for a user based on userID
const getItinerary = (userID) => {
  return db.query(
  `SELECT id, trip_name, start_location, end_location, interest_image  
  FROM itinerary 
  WHERE users_id = 
  (SELECT id FROM users WHERE sub = $1);`
  , [userID])
    .then(data => {
      return data.rows;
    })
    .catch(error => {
      console.error('Error executing query:', error);
      throw error; // Rethrow the error for proper error handling in the calling function
    });
};

module.exports = { getItinerary };
