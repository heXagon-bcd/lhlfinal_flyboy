import React, { useState, useEffect } from "react";
import { getFlightData } from "../../api/skyscannerProxy";

export default function QueryPage() {
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    getFlightData()
      .then((data) => {
        setFlightData(data);
      })
      .catch((error) => {
        console.error("Error fetching flight data:", error);
      });
  }, []);

  if (!flightData) {
    return <div>Loading...</div>;
  }

  console.log("flightData", flightData);

  return (
    <div>
      <h1>Flight Data</h1>
      {/* Render your flight data here */}
      <pre>{JSON.stringify(flightData, null, 2)}</pre>
      <p>
        {flightData.map((flight) => {
          return <li>{flight}</li>;
        })}
      </p>
    </div>
  );
}
