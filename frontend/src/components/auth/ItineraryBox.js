// ItineraryBox.js

import React from "react";
import "../../style/ItineraryBox.css";

const ItineraryBox = ({ itinerary }) => {
  return (
    <div className="itinerary-box">
      <div className="itinerary-box-1">
        <img src={itinerary.interest_image} alt={itinerary.trip_name} />
      </div>
      <div className="itinerary-box-2">
        <p className="trip-name">{itinerary.trip_name}</p>
        <div className="itinerary-box-3">
          <p>
            Travelling from: <b>{itinerary.start_location}</b> to{" "}
            <b>{itinerary.end_location}</b>
          </p>
        </div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default ItineraryBox;