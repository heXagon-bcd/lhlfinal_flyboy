import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage";
import LoginButton from "./components/auth/login";
import LogoutButton from "./components/auth/logout";
import Profile from "./components/auth/profile";
import QueryPage from "./components/results/";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./components/Form";
import Itinerary from "./components/itinerary";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginButton />} />
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<QueryPage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/itinerary" element={<Itinerary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
