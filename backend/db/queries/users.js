const db = require('../connection');

const getUser = (userID) => {
  return db.query('SELECT * FROM users WHERE sub = $1;'
  , [userID])
  .then(data => {
    return data.rows;
  })
  .catch(error => {
    console.error('Error executing query:', error);
    throw error; // Rethrow the error for proper error handling in the calling function
  });
};

module.exports = { getUser };
