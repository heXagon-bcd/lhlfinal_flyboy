import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN; // Ensure you have set up the environment variable
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID; // Ensure you have set up the environment variable

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={domain} // Using env variable
    clientId={clientId} // Using env variable
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
