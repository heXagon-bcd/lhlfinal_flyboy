import { useState } from 'react';
import { TravelForm } from './TravelForm';
import { TravelFormModal } from './TravelFormModal';

export const Form = () => {
    const [submittedData, setSubmittedData] = useState([]);

    const handleFormSubmit = (data) => {
        setSubmittedData((prevData) => [...prevData, data]);
    }

    return (
        <div>
            <h1 style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>Travel App</h1>
            <TravelForm onSubmit={handleFormSubmit} />
            {submittedData.map((data, index) => (
                <TravelFormModal key={index} data={data} />
            ))}
        </div>
    );
};
