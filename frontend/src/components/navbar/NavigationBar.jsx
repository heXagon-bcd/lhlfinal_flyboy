import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../../style/NavigationBar.css'

const NavigationBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navBar">
      <div className="logo">Flyboy</div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/form">NEW SEARCH</Link></li>
        <li><Link to="/itinerary">MY PROFILE</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/profile">PROFILE</Link></li>
            <li><Link to="/logout" onClick={() => logout()}>LOGOUT</Link></li>
          </>
        ) : (
          <li><Link to="/login" onClick={() => loginWithRedirect()}>LOGIN</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;