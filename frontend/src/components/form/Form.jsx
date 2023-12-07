import { useEffect, useState } from 'react';
import { TravelForm } from './TravelForm';
import { TravelFormModal } from './TravelFormModal';
import { FlightHotelModal } from './FlightHotelModal';
import { ReactButton } from '../button/button';
import { Spinner } from '../spinner/spinner';
import utility from '../../api/utility'
import { useNavigate } from 'react-router-dom';
import '../../style/Form.css';

export const Form = () => {
  const [submittedData, setSubmittedData] = useState([]);
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    setSubmittedData((prevData) => [...prevData, data]);
    console.log("handleFormSubmit", data[0].yelpApi);
  };

  console.log("response data", JSON.stringify(submittedData));//return
  console.log("non json response data", submittedData);//return
//save button
  const handleSubmit = () => {
    console.log("button submission", submittedData)
    utility(submittedData)
    .then(() => {
      navigate('/profile'); // Redirect on success
    })
      .catch(error => {
        // handle error
        console.error('Submission error:', error);
      });
  };

  const newSubmitSearch = () => {
    setSubmittedData([]); // Redirect on success
  };

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
        <div className="api-modal-container">
          <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop:"300px" }}> Flight & Hotel Prices</h1>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <ReactButton name="SAVE" onClick={handleSubmit}/><ReactButton name="NEW SEARCH" onClick={newSubmitSearch}/>
          </div>
          {<FlightHotelModal data={submittedData[0]} />}
          <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>Interests</h1>
          {groupedByDate &&
            Object.entries(groupedByDate).map(([date, dataGroup]) => (
              <div>
                <h3 style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>{date}</h3>
                <div style={{display:"flex"}}>
                {dataGroup.map((data) => (
                  <TravelFormModal key={data.id} data={data} />
                ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
    </div>
  );
};
