const axios = require("axios");

const optionsFlightLocation = {
  method: "GET",
  url: "https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination",
  params: { query: "toronto" },
  headers: {
    "X-RapidAPI-Key": "0bdd0ded57mshf2694dce58e8a6dp12960djsn31fa35459f57",
    "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
  },
};

const optionsFlights = {
  method: "GET",
  url: "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights",
  params: {
    fromId: "BOM.AIRPORT",
    toId: "DEL.AIRPORT",
    departDate: "2023-11-22",
    returnDate: "2023-11-29",
    pageNo: "1",
    adults: "1",
    children: "0,17",
    currency_code: "AED",
  },
  headers: {
    "X-RapidAPI-Key": "0bdd0ded57mshf2694dce58e8a6dp12960djsn31fa35459f57",
    "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
  },
};

const getFlightData = () => {
  console.log("Making API request to fetch flight data");
  return axios
    .request(optionsFlightLocation)
    .then((response) => {
      const location = response.data.data.map((item) => item.code);
      console.log("location", location);
      return location;
    })
    .catch((error) => {
      console.error(error);
      throw error; // Throw the error to handle it in the router
    });
};

module.exports = { getFlightData };
