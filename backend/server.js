// load .env data into process.env
require("dotenv").config();
const flightAPIRouter = require("./routes/flight");
const termSearchRouter = require("./routes/termSearch");
const path = require("path");

// Web server config
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

//cors
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3002",
  })
);

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(cors());

//react

app.use(express.static(path.join(__dirname, "..", "frontend", "build")));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require("./routes/users-api");
const widgetApiRoutes = require("./routes/widgets-api");
const usersRoutes = require("./routes/users");
const flightAPI = require("./api/skyscanner");
const termSearch = require("./routes/helper/search");
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", userApiRoutes);
app.use("/api/widgets", widgetApiRoutes);
app.use("/users", usersRoutes);
app.use("/api", flightAPIRouter);
app.use("/api", termSearchRouter);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.send("Hello");
});

//serve react
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
