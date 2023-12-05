import { useState } from "react";
import { TravelForm } from "./TravelForm";
import { TravelFormModal } from "./TravelFormModal";
import { FlightHotelModal } from "./FlightHotelModal";

export const Form = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
    console.log("handleFormSubmit", data);
  };

  return (
    <div>
      <h1
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Travel App
      </h1>
      <TravelForm onSubmit={handleFormSubmit} />
      {submittedData.map((data, index) => (
        <TravelFormModal key={index} data={data} />
      ))}
      <h1> Flight & Hotel Prices</h1>
    </div>
  );
};
