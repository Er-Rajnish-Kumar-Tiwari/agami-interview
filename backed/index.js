const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./Config/db");

dotenv.config();
dbConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./Routes/flightRoutes"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});