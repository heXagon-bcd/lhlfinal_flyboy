// load .env data into process.env
require("dotenv").config();

// Web server config
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
const {search} = require("./routes/helper/search")

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const userApiRoutes = require("./routes/users-api");
const widgetApiRoutes = require("./routes/widgets-api");
const usersRoutes = require("./routes/users");

app.use("/api/users", userApiRoutes);
app.use("/api/widgets", widgetApiRoutes);
app.use("/users", usersRoutes);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/api/flights", async(req, res) => {
  try {
    const terms = req.body.interest1;
    const location = req.body.destination;

    const result = await search(terms, location);

    console.log(result);
    res.json({ result });
  } catch (error) {
    console.error("Error in /api/flights route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});