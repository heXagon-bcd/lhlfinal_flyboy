import { useEffect, useState } from 'react';
import { TravelForm } from './TravelForm';
import { TravelFormModal } from './TravelFormModal';
import { FlightHotelModal } from './FlightHotelModal';
import { Spinner } from '../spinner/spinner';
import '../../style/Form.css';

export const Form = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
    console.log("handleFormSubmit", data[0].yelpApi);
  };

  console.log("response data", JSON.stringify(submittedData));//return
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";

  const api = submittedData?.[0]?.[0]?.yelpApi;

  let groupedByDate;

  if (api) {
    groupedByDate = api.reduce((acc, item) => {
      const date = item.date;
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});
  }

  return (
    <div>
      {submittedData.length === 0 && (
        <div>
          <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Travel App</h1>
          <TravelForm onSubmit={handleFormSubmit} />
        </div>
      )}

      {submittedData.length > 0 && (
        <div>
          <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Travel App</h1>
          <h1> Flight & Hotel Prices</h1>
          {<FlightHotelModal data={submittedData[0]} />}
          <h1>Interests</h1>
          {groupedByDate &&
            Object.entries(groupedByDate).map(([date, dataGroup]) => (
              <div key={date}>
                <h2>{date}</h2>
                {dataGroup.map((data) => (
                  <TravelFormModal key={data.id} data={data} />
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
