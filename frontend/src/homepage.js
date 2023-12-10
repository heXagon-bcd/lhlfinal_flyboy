import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/auth/login";
import LogoutButton from "./components/auth/logout";
import Profile from "./components/auth/profile";
import logo from "./logo.svg";
import "./App.css";
import "./style/Homepage.css"
import WelcomePage from "./components/auth/WelcomePage";

export default function HomePage() {
  const { isAuthenticated } = useAuth0();

  return (
    <main>
      {isAuthenticated ? (
        <>
          <Profile />
        </>
      ) : (
        <>
          <WelcomePage />
        </>
      )}
    </main>
  );
}
