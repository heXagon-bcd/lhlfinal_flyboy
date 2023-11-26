import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './components.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="Login-button" onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;