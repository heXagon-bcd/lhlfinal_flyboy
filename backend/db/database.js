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
  const queryString = ''
};

getUser();
module.exports = { getUser };
