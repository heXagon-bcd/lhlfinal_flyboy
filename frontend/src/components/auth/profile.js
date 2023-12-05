import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../style/auth.css'

// make useEffect that makes axios request, sends user object to backend (complete)
// backend receives user object (complete)
// backend needs to make query to database
// send db obj to frontend
// needs useState (implement before useEffect) and then call it within useEffect



const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0(); // send user object to backend
  const [itineraries, setItineraries] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  console.log(user)

  useEffect(() => {
    const sendUserToBackend = async () => {
      if (isAuthenticated) {
        try {
          // Backend endpoint for handling user data is '/api/user'
          const response = await axios.post("http://localhost:8080/api/users", {
            user,
          });
          console.log("Backend Response:", response.data);
          const { itineraries = [], userProfile } = response.data;
          console.log(itineraries);
          console.log(userProfile)
        window.sessionStorage.setItem('userID', userProfile.id) // Saves data to session
          setUserProfile(userProfile);
          setItineraries(itineraries); // Update the state with fetched
          // Handle the response as needed
        } catch (error) {
          console.error("Error sending user to backend:", error);
          // Handle error as needed
        }
      }
    };

    sendUserToBackend();
  }, [isAuthenticated, user]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log(window.sessionStorage.getItem('userID'))

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} /> {/* Calling data from auth0 directly */}
        <h2>Name: {userProfile.first_name} {userProfile.last_name}</h2> {/* Calling data from database */}
        <p>E-mail: {user.email}</p> {/* Calling data from auth0 directly */}

        {/* Display itineraries in a table */}
        <center>
        <table className="itineraries-table">
          <thead>
            <tr>
              <th colSpan="3">Itineraries for {userProfile.first_name}</th>
            </tr>
            <tr>
              <th>ID</th>
              <th>Start Location</th>
              <th>End Location</th>
            </tr>
          </thead>
          <tbody>
            {itineraries.map((itinerary) => (
              <tr key={itinerary.id}>
                <td>{itinerary.id}</td>
                <td>{itinerary.start_location}</td>
                <td>{itinerary.end_location}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </center>
      </div>
    )
  );
};

export default Profile;
