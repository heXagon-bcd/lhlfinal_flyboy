import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../style/TravelForm.css";
import airplane from "../../flight-loader.svg";

export const TravelForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      tripName: "",
      destination: "",
      locationFromDeparture: "",
      departureDate: "",
      returnDate: "",
      interest1: "",
      interest2: "",
      interest3: "",
    },
    validationSchema: Yup.object({
      tripName: Yup.string().required("Trip name is required"),
      destination: Yup.string().required("Destination city is required"),
      locationFromDeparture: Yup.string().required("Departure city is required"),
      departureDate: Yup.date().required("Departure date required"),
      returnDate: Yup.date().required("Return date required"),
      interest1: Yup.string().required("Interest 1 is required"),
      interest2: Yup.string().required("Interest 2 is required"),
      interest3: Yup.string().required("Interest 3 is required"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:8080/api/flight", values);
        onSubmit(res.data);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <div className="outer-form-container">
      {!formik.isSubmitting ? (
        <form className="search-form" onSubmit={formik.handleSubmit}>
          <div className="upper-form">
            <div className="title">
              <h4>START A NEW TRIP</h4>
              <p>Enter your trip details below:</p>
            </div>
            <InputField
              id="tripName"
              name="tripName"
              placeholder="Enter Trip Name"
              type="text"
              value={formik.values.tripName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.tripName}
              error={formik.errors.tripName}
            />
            <div className="columns">
              <div className="left-column">
                <InputField
                  id="destination"
                  name="destination"
                  placeholder="Destination City"
                  type="text"
                  value={formik.values.destination}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  touched={formik.touched.destination}
                  error={formik.errors.destination}
                />
                <InputField
                  id="departureDate"
                  name="departureDate"
                  placeholder="Departure Date"
                  type="date"
                  value={formik.values.departureDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  touched={formik.touched.departureDate}
                  error={formik.errors.departureDate}
                />
              </div>

              <div className="right-column">
                <InputField
                  id="locationFromDeparture"
                  name="locationFromDeparture"
                  placeholder="City of Departure"
                  type="text"
                  value={formik.values.locationFromDeparture}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  touched={formik.touched.locationFromDeparture}
                  error={formik.errors.locationFromDeparture}
                />
                <InputField
                  id="returnDate"
                  name="returnDate"
                  placeholder="Return Date"
                  type="date"
                  value={formik.values.returnDate}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  touched={formik.touched.returnDate}
                  error={formik.errors.returnDate}
                />
              </div>
            </div>
          </div>

          <div className="lower-form">
            <InputField
              id="interest1"
              name="interest1"
              placeholder="Interest 1"
              type="text"
              value={formik.values.interest1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.interest1}
              error={formik.errors.interest1}
            />
            <InputField
              id="interest2"
              name="interest2"
              placeholder="Interest 2"
              type="text"
              value={formik.values.interest2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.interest2}
              error={formik.errors.interest2}
            />
            <InputField
              id="interest3"
              name="interest3"
              placeholder="Interest 3"
              type="text"
              value={formik.values.interest3}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              touched={formik.touched.interest3}
              error={formik.errors.interest3}
            />

            <button className="form-submit-button" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      ) : (
        <div className="loading-screen-container">
          <img src={airplane} alt="Loading" />
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

const InputField = ({
  id,
  name,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => (
  <div className="input-container">
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className={`formik ${touched && error ? "formik-error" : ""}`}
    />
    {touched && error && <div className="formik-error">{error}</div>}
  </div>
);

export default TravelForm;
