import { useState, useEffect } from "react";
import axios from "axios";

const utility = (data) => {
  return axios
    .post("http://localhost:8080/api/flight/database", data)
    .then((response) => {
      console.log("utility response", response.data);
      return response.data;
    })
    .catch((e) => console.error("error pushing data"));
};

export default utility;
