import React from "react";
import "../../style/WelcomePage.css"; // Import the stylesheet for the SplashPage
import LoginButton from "./login";

const WelcomePage = () => {
  return (
    <div className="splash-page">
      <div className="welcome-top">
        <h4 className="welcome-text">WELCOME TO</h4>
        <h1 className="welcome-logo">Flyboy</h1>
      </div>
      <div className="welcome-bottom">
        <h4 className="welcome-text-2">PERSONAL TRIP PLANNER</h4>
        <LoginButton />
      </div>
    </div>
  );
};

export default WelcomePage;
