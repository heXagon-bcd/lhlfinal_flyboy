export const FlightHotelModal = ( {data} ) => {
  const apiFlightPrice = data[1].bookingsAPI.flightDetailsPrice;
  const apiHotelPrice = data[2].hotelAPI.hotelCost
  const apiHotelDetails = data[2].hotelAPI.hotelDescription

  console.log("FlightHotelModal api", data[2].hotelAPI);

  return (
    <div>
      <div>
      <p>The total cost of your Round Trip flight will be around ${apiFlightPrice} </p>
      </div>
      <div>
      <p>The total cost of your Hotel will be around ${apiHotelPrice}.</p>
      <p>Here's a hotel that we reccomend:</p>
      <p>{apiHotelDetails}</p>
      </div>
    </div>
  )
}