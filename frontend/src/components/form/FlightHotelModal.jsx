export const FlightHotelModal = ( {data} ) => {
  const apiFlightPrice = data[1].bookingsAPI.flightDetailsPrice;
  const apiHotelPrice = data[2].hotelAPI.hotelCost
  const apiHotelDetails = data[2].hotelAPI.hotelDescription

  const formattedFlightPrice = apiFlightPrice.toFixed(2).toLocaleString();
  const formattedHotelPrice = apiHotelPrice.toFixed(2).toLocaleString();

  console.log("FlightHotelModal api", data[2].hotelAPI);

  return (
    <div>
      <div>
      <p>The total cost of your Round Trip flight will be around <strong>${formattedFlightPrice}</strong> </p>
      </div>
      <div>
      <p>The total cost of your Hotel will be around <strong>${formattedHotelPrice}</strong>.</p>
      <p><strong>Here's a hotel that we reccomend:</strong></p>
      <p>{apiHotelDetails}</p>
      </div>
    </div>
  )
}
