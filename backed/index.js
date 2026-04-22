const express = require("express");
const cors = require("cors");
const docRoutes = require("./Routes/docRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/docs", docRoutes);

app.listen(2000, () => console.log("Server running on port 2000"));