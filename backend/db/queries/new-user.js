const db = require('../connection');

const addUser = (firstName, lastName, sub) => {
  return db.query(`INSERT INTO users (first_name, last_name, sub) VALUES
  ($1, $2, $3) RETURNING *;`
  , [firstName, lastName, sub])
  .then(data => {
    return data.rows;
  })
  .catch(error => {
    console.error('Error executing query:', error);
    throw error; // Rethrow the error for proper error handling in the calling function
  });
};

module.exports = { addUser };



