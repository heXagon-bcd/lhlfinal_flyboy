import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import "../../style/TravelForm.css";
import airplane from "../../flight-loader.svg";

export const TravelForm = ({ onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
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
      destination: Yup.string().required("Destination is required"),
      locationFromDeparture: Yup.string().required(
        "Departure location is required"
      ),
      departureDate: Yup.date().required("Departure date required"),
      returnDate: Yup.date().required("Return date required"),
      interest1: Yup.string().required("Interest 1 is required"),
      interest2: Yup.string().required("Interest 2 is required"),
      interest3: Yup.string().required("Interest 3 is required"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res = await axios.post(
          "http://localhost:8080/api/flight",
          values
        );
        onSubmit(res.data);
        // console.log("form submission..", res.data[0].yelpApi);
        console.log("res.data", res.data);
        // console.log("form submission values", values)
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    }, //use promise instead
  });

  return (
    <div className="outer-form-container">
      {isLoading ? (
        <div className="loading-screen-container">
          <img src={airplane} alt="Loading" />
          <p>Loading...</p>
        </div>
      ) : (
        <form className="search-form" onSubmit={formik.handleSubmit}>
          <div className="title">
            <h4>Enter Your Trip Details</h4>
          </div>

          <div>
            <input
              type="text"
              id="tripName"
              name="tripName"
              placeholder="Enter Trip Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tripName}
            />
            {formik.touched.tripName && formik.errors.tripName && (
              <div>{formik.errors.tripName}</div>
            )}
          </div>

          <div>
            <input
              type="text"
              id="destination"
              name="destination"
              placeholder="Destination"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.destination}
            />
            {formik.touched.destination && formik.errors.destination && (
              <div>{formik.errors.destination}</div>
            )}
          </div>

          <div className="upper-form">
            <div className="left-column">
              <div className="input-container">
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  className="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.departureDate}
                />
                {formik.touched.departureDate &&
                  formik.errors.departureDate && (
                    <div>{formik.errors.departureDate}</div>
                  )}
              </div>
            </div>

            <div className="right-column">
              <div className="input-container">
                <input
                  type="text"
                  id="locationFromDeparture"
                  name="locationFromDeparture"
                  placeholder="Enter Departure Location"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.locationFromDeparture}
                />
                {formik.touched.locationFromDeparture &&
                  formik.errors.locationFromDeparture && (
                    <div>{formik.errors.locationFromDeparture}</div>
                  )}
              </div>

              <div className="input-container">
                <input
                  type="date"
                  id="returnDate"
                  name="returnDate"
                  className="date"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.returnDate}
                />
                {formik.touched.returnDate && formik.errors.returnDate && (
                  <div>{formik.errors.returnDate}</div>
                )}
              </div>
            </div>
          </div>

          <div className="lower-form">
            <div className="input-container">
              <input
                type="text"
                id="interest1"
                name="interest1"
                placeholder="Interest 1"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.interest1}
              />
              {formik.touched.interest1 && formik.errors.interest1 && (
                <div>{formik.errors.interest1}</div>
              )}
            </div>

            <div className="input-container">
              <input
                type="text"
                id="interest2"
                name="interest2"
                placeholder="Interest 2"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.interest2}
              />
              {formik.touched.interest2 && formik.errors.interest2 && (
                <div>{formik.errors.interest2}</div>
              )}
            </div>

            <div className="input-container">
              <input
                type="text"
                id="interest3"
                name="interest3"
                placeholder="Interest 3"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.interest3}
              />
              {formik.touched.interest3 && formik.errors.interest3 && (
                <div>{formik.errors.interest3}</div>
              )}
            </div>

            <button className="search-button" type="submit">
              SUBMIT
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
