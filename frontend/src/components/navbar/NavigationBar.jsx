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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/form">New Search</Link></li>
        <li><Link to="/itinerary">My Profile</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout" onClick={() => logout()}>Logout</Link></li>
          </>
        ) : (
          <li><Link to="/login" onClick={() => loginWithRedirect()}>Login</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;