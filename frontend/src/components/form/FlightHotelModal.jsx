export const FlightHotelModal = (data) => {
  return (
    <div>
      <div>
      <p>The total cost of your flight will be around ${data.bookingsAPI.flightDetailPrice}</p>
      </div>
      <div>
      <p>The total cost of your Hotel will be around ${data.hotelsAPI.hotelCost}.</p>
      <p>Here's a a hotel that we reccomend {data.hotelsAPI.hotelDescription}</p>
      </div>
    </div>
  )
}
