import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import '../style/TravelForm.css'

export const TravelForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      destination: '',
      locationFromDeparture: '',
      departureDate: '',
      returnDate: '',
      interest1: '',
      interest2: '',
      interest3: '',
    },
    validationSchema: Yup.object({
      destination: Yup.string().required('Destination is required'),
      locationFromDeparture: Yup.string().required('Location from departure is required'),
      departureDate: Yup.date().required('Departure date required'),
      returnDate: Yup.date().required('Return date required'),
      interest1: Yup.string().required('Interest 1 is required'),
      interest2: Yup.string().required('Interest 2 is required'),
      interest3: Yup.string().required('Interest 3 is required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:8080/api/flight", values);
        onSubmit(res.data.result);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.destination}
        />
        {formik.touched.destination && formik.errors.destination && (
          <div>{formik.errors.destination}</div>
        )}
      </div>

      <div>
        <label htmlFor="departureDate">Departure date:</label>
        <input
          type="date"
          id="departureDate"
          name="departureDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.departureDate}
        />
        {formik.touched.departureDate && formik.errors.departureDate && (
          <div>{formik.errors.departureDate}</div>
        )}
      </div>

      <div>
        <label htmlFor="returnDate">Return Date:</label>
        <input
          type="date"
          id="returnDate"
          name="returnDate"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.returnDate}
        />
        {formik.touched.returnDate && formik.errors.returnDate && (
          <div>{formik.errors.returnDate}</div>
        )}
      </div>

      <div>
        <label htmlFor="locationFromDeparture">Location from Departure:</label>
        <input
          type="text"
          id="locationFromDeparture"
          name="locationFromDeparture"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.locationFromDeparture}
        />
        {formik.touched.locationFromDeparture && formik.errors.locationFromDeparture && (
          <div>{formik.errors.locationFromDeparture}</div>
        )}
      </div>

      <div>
        <label htmlFor="interest1">Interest 1:</label>
        <input
          type="text"
          id="interest1"
          name="interest1"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.interest1}
        />
        {formik.touched.interest1 && formik.errors.interest1 && <div>{formik.errors.interest1}</div>}
      </div>

      <div>
        <label htmlFor="interest2">Interest 2:</label>
        <input
          type="text"
          id="interest2"
          name="interest2"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.interest2}
        />
        {formik.touched.interest2 && formik.errors.interest2 && <div>{formik.errors.interest2}</div>}
      </div>

      <div>
        <label htmlFor="interest3">Interest 3:</label>
        <input
          type="text"
          id="interest3"
          name="interest3"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.interest3}
        />
        {formik.touched.interest3 && formik.errors.interest3 && <div>{formik.errors.interest3}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};