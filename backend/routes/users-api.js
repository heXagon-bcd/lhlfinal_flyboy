/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const userQuery = require("../db/queries/users");
const newUserQuery = require("../db/queries/new-user");
const userItineraryQuery = require("../db/queries/user-itinerary");

router.get("/", (req, res) => {
  userQuery
    .getUsers()
    .then((users) => {
      res.json({ users });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/", async (req, res) => {
  const sub = req.body.user.sub;
  console.log("User Sub:", sub);

  // Make a funciton , that checks the DB for an exsiting matching sub
  // if there is a match, return that match ie SELECT * FROM USERS where sub = '.....
  // if there is not match insert that the users ttable with the sub

  try {
    const user = await userQuery.getUser(sub);

    if (user && user.length > 0 && sub === user[0].sub) {
      const userProfile = user[0];
      const itineraries = await userItineraryQuery.getItinerary(sub);
      res.json({ itineraries, userProfile });

    } else {
      const firstName = req.body.user.nickname || "Spongebob";
      const lastName = "Squarepants";

      const newUser = await newUserQuery.addUser(firstName, lastName, sub);
      const userProfile = newUser[0];
      const itineraries = await userItineraryQuery.getItinerary(sub);
      res.json({ itineraries, userProfile });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }

});

module.exports = router;
