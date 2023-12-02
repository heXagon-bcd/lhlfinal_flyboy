const axios = require("axios");
const moment = require("moment");

// const startLocation = "toronto";

// const getFlightData = async (startLocation, endLocation) => {
//   try {
//     const startLocationResponse = await axios.request(optionsFlightLocation);
//     const dataResponse = startLocationResponse.data.data[0].id; //retunrs city id
//     // const airportResponse = dataResponse.map((airport) => airport);
//     console.log("startLocationResponse", dataResponse);
//     // console.log("Start Location Airport Code", startAirportCode);
//     // console.log("The data is returned", startAirportCode);
//     return dataResponse;
//   } catch (e) {
//     console.error("Heres the error", e);
//   }
// };

const getFlightData = async (
  startLocation,
  endLocation,
  startDate,
  returnDate
) => {
  try {
    //flight location api
    const optionsFlightLocation = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination",
      params: { query: startLocation },
      headers: {
        "X-RapidAPI-Key": "0bdd0ded57mshf2694dce58e8a6dp12960djsn31fa35459f57",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    const optionsEndFlightLocation = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination",
      params: { query: endLocation },
      headers: {
        "X-RapidAPI-Key": "0bdd0ded57mshf2694dce58e8a6dp12960djsn31fa35459f57",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    //Retreiving client start location input
    const startLocationResponse = await axios.request(optionsFlightLocation);
    const startEndLocationResponse = await axios.request(
      optionsEndFlightLocation
    );
    const dataResponse = startLocationResponse.data.data[0].id; //retunrs city id
    const dataEndResponse = startEndLocationResponse.data.data[0].id; // return cityid

    console.log("startLocationResponse", dataResponse);

    //flight data api
    const optionsFlights = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/flights/searchFlights",
      params: {
        fromId: dataResponse,
        toId: dataEndResponse,
        departDate: moment(startDate, "M/D/YYYY").format("YYYY-MM-DD"),
        returnDate: moment(returnDate, "M/D/YYYY").format("YYYY-MM-DD"),
        pageNo: "1",
        adults: "1",
        children: "0,17",
        currency_code: "CAD",
      },
      headers: {
        "X-RapidAPI-Key": "0bdd0ded57mshf2694dce58e8a6dp12960djsn31fa35459f57",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    console.log("date api call", optionsFlights);

    //query response
    const flightResponseRequest = await axios.request(optionsFlights);
    const bestFlightArray = flightResponseRequest.data.data.flightDeals;
    const bestFlight = bestFlightArray.filter((flight) => {
      return flight.key === "BEST";
    });
    console.log("best flight prices", bestFlight[0].travellerPrices);
    const bestFlightDetails = bestFlight[0].travellerPrices.filter((price) => {
      return price.travellerType === "ADULT";
    });
    // console.log("bestFlightArray", bestFlightArray);
    console.log("flightResponseREquest", flightResponseRequest);
    // console.log("bestflightdetials", bestFlightDetails);

    //returns price info from server
    // console.log("return", {
    //   startCity: dataResponse,
    //   endCity: dataEndResponse,
    //   flightDetailsPrice:
    //     bestFlightDetails[0].travellerPriceBreakdown.total.units,
    // });
    return {
      startCity: dataResponse,
      endCity: dataEndResponse,
      flightDetailsPrice:
        bestFlightDetails[0].travellerPriceBreakdown.total.units,
    };
  } catch (e) {
    console.error("Heres the error", e);
  }
};

module.exports = { getFlightData };
