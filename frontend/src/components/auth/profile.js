import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ItineraryBox from "./ItineraryBox";
import "../../style/auth.css";
import "../../style/ItineraryBox.css";
import "../../style/Profile.css";

// make useEffect that makes axios request, sends user object to backend (complete)
// backend receives user object (complete)
// backend needs to make query to database
// send db obj to frontend
// needs useState (implement before useEffect) and then call it within useEffect

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0(); // send user object to backend
  const [itineraries, setItineraries] = useState([]);
  const [userProfile, setUserProfile] = useState([]);
  console.log(user);

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
          console.log(userProfile);
          window.sessionStorage.setItem("userID", userProfile.id); // Saves data to session
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

  console.log(window.sessionStorage.getItem("userID"));

  const sortedItineraries = [...itineraries].sort((a, b) => b.id - a.id);

  return (
    isAuthenticated && (
      <div className="profile-container">
        <div className="user-info-container">
          <h4>Displaying {userProfile.first_name}'s Trips</h4>
          <div className="user-info-container-1">
            <div className="user-info-container-2">
              <img src={user.picture} alt={user.name} />{" "}
              {/* Calls data from auth0 directly */}
            </div>
            <div className="user-info-container-3">
              <p>
                {userProfile.first_name} {userProfile.last_name}{" "}
                {/* Calls data from database */}
              </p>{" "}
              <p>{user.email}</p> {/* Calls data from auth0 directly */}
            </div>
          </div>
        </div>
        {/* Display itineraries using ItineraryBox component */}
        <div className="itineraries-container">
          {sortedItineraries.map((itinerary) => (
            <ItineraryBox key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
      </div>
    )
  );
};

export default Profile;
