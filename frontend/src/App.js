import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginButton from "./components/auth/login";
import LogoutButton from "./components/auth/logout";
import Profile from "./components/auth/profile";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            Welcome to FlyBoy!
          </p>
          {isAuthenticated ? (
            <>
              <Profile />
              <LogoutButton />
            </>
          ) : (
            <LoginButton />
          )}
        </header>
        <Switch>
          <Route path="/login">
            <LoginButton />
          </Route>
          <Route path="/logout">
            <LogoutButton />
          </Route>
          <Route path="/flight">
            <Profile />
          </Route>
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
