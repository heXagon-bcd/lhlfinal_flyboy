import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import '../../style/NavigationBar.css'

const NavigationBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <nav className="navBar">
      <Link to="/"><div className="navLogo">Flyboy</div></Link>
      <ul>
        <li><Link to="/form">NEW SEARCH</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/profile">MY TRIPS</Link></li>
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