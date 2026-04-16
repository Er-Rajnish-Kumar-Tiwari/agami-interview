const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./Config/db");
const gameRoutes = require("./Routes/gameRoutes");

dotenv.config();
dbConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/games", gameRoutes);

app.listen(2000, () => {
  console.log("Server running on port 2000");
});