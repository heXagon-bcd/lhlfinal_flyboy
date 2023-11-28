/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');
const userItineraryQuery = require('../db/queries/user-itinerary');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/', (req, res) => {
  // console.log(req.body)
  const sub = req.body.user.sub
  console.log('User Sub:', sub);

  userItineraryQuery.getItinerary(sub)
    .then(itineraries => {
      console.log('Itineraries:', itineraries);
      // res.send(itineraries)
      res.json({ itineraries })
    })
  // res.send('it works!')
  .catch(err => { // is this catch correct?
    console.error('Error fetching itinerary:', err);
    res
      .status(500)
      .json({ error: err.message });
  });
})

module.exports = router;
