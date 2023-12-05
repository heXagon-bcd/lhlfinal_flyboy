import axios from "axios";

const getFlightData = () => {
  return axios
    .get("http://localhost:8080/api/flightAPI") // This should match the route in your Express server
    .then((response) => response.data)
    .catch((error) => console.error("Error fetching flight data", error));
};

export { getFlightData };
