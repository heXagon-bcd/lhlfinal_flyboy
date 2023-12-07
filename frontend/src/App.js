import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage";
import LoginButton from "./components/auth/login";
import LogoutButton from "./components/auth/logout";
import Profile from "./components/auth/profile";
import QueryPage from "./components/results/";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/form/Form";
import Itinerary from "./components/itinerary";
import NavigationBar from "./components/navbar/NavigationBar";

function App() {
  const { isAuthenticated } = useAuth0();
  const [submittedData, setSubmittedData] = useState([]);

  const handleNewSearch = () => {
    setSubmittedData([]);
  };

  return (
    <Router>
      <div className="App">
        <NavigationBar onNewSearch={handleNewSearch} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginButton />} />
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<QueryPage />} />
          <Route
            path="/form"
            element={
              <Form
                submittedData={submittedData}
                setSubmittedData={setSubmittedData}
              />
            }
          />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
