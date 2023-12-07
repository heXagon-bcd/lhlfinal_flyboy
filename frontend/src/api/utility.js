import { useState, useEffect } from "react";
import axios from "axios";

export default utility = (data) => {
  return axios
    .put("http://localhost:8080/api/database", data)
    .then((response) => response.data)
    .catch((e) => console.error("error pushing data"));
};
