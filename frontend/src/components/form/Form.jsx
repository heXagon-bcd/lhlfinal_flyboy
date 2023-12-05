import { useEffect, useState } from 'react';
import { TravelForm } from './TravelForm';
import { TravelFormModal } from './TravelFormModal';
import { FlightHotelModal } from './FlightHotelModal';
<<<<<<< HEAD
=======
import { Spinner } from '../spinner/spinner';
>>>>>>> 07bd56543dc67646d58bf6781b5a407acbb1297d
import '../../style/Form.css'

export const Form = () => {
    const [submittedData, setSubmittedData] = useState([]);

    const handleFormSubmit = (data) => {
        setSubmittedData((prevData) => [...prevData, data]);
        console.log("handleFormSubmit", data[0].yelpApi)
    }

    console.log("response data", JSON.stringify(submittedData));//return
    // console.log("response data non json", submittedData[0][0].yelpApi);//return
    const EMPTY = "EMPTY";
    const SHOW = "SHOW";

<<<<<<< HEAD

    return (
        <div>
          { submittedData.length === 0 && (<div>
            <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Travel App</h1>
            <TravelForm onSubmit={handleFormSubmit} />
          </div>)}

            {submittedData.length > 0 && (<div>
            <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Travel App</h1>
            <TravelForm onSubmit={handleFormSubmit} />
=======
    return (
        <div>
          { submittedData.length === 0 && (<div>
            <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Travel App</h1>
            <TravelForm onSubmit={handleFormSubmit} />
          </div>)}

            {submittedData.length > 0 && (<div>
            <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Travel App</h1>
>>>>>>> 07bd56543dc67646d58bf6781b5a407acbb1297d
            <h1> Flight & Hotel Prices</h1>
            {<FlightHotelModal data = {submittedData[0]}/>}
            <h1>Interests</h1>
            {submittedData[0][0].yelpApi.map((data) => (
                <TravelFormModal data={data} />
            ))}

          </div>)}
        </div>
    );
};