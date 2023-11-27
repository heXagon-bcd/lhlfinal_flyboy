import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

// make useEffect that makes axios request, sends user object to backend

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0(); // send user object to backend

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>Username: {user.name}</h2>
        <p>E-mail: {user.email}</p>
      </div>
    )
  );
};

export default Profile;