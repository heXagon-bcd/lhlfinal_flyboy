import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './components.css';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const userLogout = () => {
    window.sessionStorage.removeItem('userID')
    logout({ logoutParams: { returnTo: window.location.origin } })
  }
  
  return (
    <button className="Login-button" onClick={userLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;