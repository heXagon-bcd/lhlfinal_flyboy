import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/auth/login";
import LogoutButton from "./components/auth/logout";
import Profile from "./components/auth/profile";
import logo from "./logo.svg";
import "./App.css";

export default function HomePage() {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>
        {/* Edit <code>src/App.js</code> and save to reload. */}
        Welcome to FlyBoy!
      </h1>
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </header>
  );
}
