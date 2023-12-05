const axios = require("axios");
const moment = require("moment");

const getHotelData = async (
  startLocation,
  endLocation,
  startDate,
  returnDate
) => {
  console.log("get hotel start end", startLocation, endLocation);
  try {
    //GET CITY DATA
    const options = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination",
      params: { query: endLocation },
      headers: {
        "X-RapidAPI-Key": "0bdd0ded57mshf2694dce58e8a6dp12960djsn31fa35459f57",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    const hotelLocation = await axios.request(options);
    const cityID = hotelLocation.data.data[0].dest_id;
    console.log("Hotel locations", hotelLocation.data.data[0].dest_id); //city code for api

    //GET HOTEL PRICE
    const optionsHotelLocation = {
      method: "GET",
      url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
      params: {
        dest_id: cityID,
        search_type: "CITY",
        arrival_date: moment(startDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
        departure_date: moment(returnDate, "YYYY-MM-DD").format("YYYY-MM-DD"),
        adults: "1",
        room_qty: "1",
        page_number: "1",
        sort_by: "distance",
        languagecode: "en-us",
        currency_code: "CAD",
      },
      headers: {
        "X-RapidAPI-Key": "0bdd0ded57mshf2694dce58e8a6dp12960djsn31fa35459f57",
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    };

    const hotelPrice = await axios.request(optionsHotelLocation);
    const hotelPriceData =
      hotelPrice.data.data.hotels[0].property.priceBreakdown.grossPrice.value;
    const hotelDescription = hotelPrice.data.data.hotels[0].accessibilityLabel;
    // console.log("Retrieving hotel price...", hotelPrice.data.data.hotels[0]);

    return {
      cityID: cityID,
      hotelCost: hotelPriceData,
      hotelDescription: hotelDescription,
    };
  } catch (e) {
    console.error("Here's the error", e);
  }
};

module.exports = { getHotelData };
