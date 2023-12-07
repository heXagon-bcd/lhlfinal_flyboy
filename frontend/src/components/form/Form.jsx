import { useEffect, useState } from 'react';
import { TravelForm } from './TravelForm';
import { TravelFormModal } from './TravelFormModal';
import { FlightHotelModal } from './FlightHotelModal';
import { ReactButton } from '../button/button';
import { Spinner } from '../spinner/spinner';
import '../../style/Form.css';

export const Form = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleFormSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
    console.log("handleFormSubmit", data[0].yelpApi);
  };

  console.log("response data", JSON.stringify(submittedData));//return
  console.log("non json response data", submittedData);//return
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
    <div className='logged-in-bg-img'>
      <div className="outer-form-container">
      {submittedData.length === 0 && (
        <div className="travel-form-container">
          <TravelForm onSubmit={handleFormSubmit} />
        </div>
      )}

      {submittedData.length > 0 && (
        <div>
          <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:"80px" }}> Flight & Hotel Prices</h1>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <ReactButton/>
          {<FlightHotelModal data={submittedData[0]} />}
          </div>
          <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>Interests</h1>
          {groupedByDate &&
            Object.entries(groupedByDate).map(([date, dataGroup]) => (
              <>
                <h3 style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>{date}</h3>
                <div key={date} style={{display:"flex"}}>
                  
                  {dataGroup.map((data) => (
                    <TravelFormModal key={data.id} data={data} />
                  ))}
                </div>
              </>
            ))}
        </div>
      )}
    </div>
    </div>
  );
};
